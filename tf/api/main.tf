# ------------------------------------------------------------------------------
# CONFIGURE OUR AWS CONNECTION 
# ------------------------------------------------------------------------------


terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "eu-west-2"
}



# ------------------------------------------------------------------------------
# CONFIGURE OUR AWS ECR
# ------------------------------------------------------------------------------
module "ecr" {

  source = "./terraform-aws-ecr"

  name                 = "eguru"
  scan_on_push         = true
  timeouts_delete      = "60m"
  image_tag_mutability = "IMMUTABLE"


  policy = <<EOF
{
    "Version": "2008-10-17",
    "Statement": [
        {
            "Sid": "repo policy",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "ecr:GetDownloadUrlForLayer",
                "ecr:BatchGetImage",
                "ecr:BatchCheckLayerAvailability",
                "ecr:PutImage",
                "ecr:InitiateLayerUpload",
                "ecr:UploadLayerPart",
                "ecr:CompleteLayerUpload",
                "ecr:DescribeRepositories",
                "ecr:GetRepositoryPolicy",
                "ecr:ListImages",
                "ecr:DeleteRepository",
                "ecr:BatchDeleteImage",
                "ecr:SetRepositoryPolicy",
                "ecr:DeleteRepositoryPolicy"
            ]
        }
    ]
}
EOF

  # Only one lifecycle policy can be used per repository.
  # To apply multiple rules, combined them in one policy JSON.
  lifecycle_policy = <<EOF
{
    "rules": [
        {
            "rulePriority": 1,
            "description": "Expire untagged images older than 14 days",
            "selection": {
                "tagStatus": "untagged",
                "countType": "sinceImagePushed",
                "countUnit": "days",
                "countNumber": 14
            },
            "action": {
                "type": "expire"
            }
        },
        {
            "rulePriority": 2,
            "description": "Keep last 30 dev images",
            "selection": {
                "tagStatus": "tagged",
                "tagPrefixList": ["dev"],
                "countType": "imageCountMoreThan",
                "countNumber": 30
            },
            "action": {
                "type": "expire"
            }
        }
    ]
}
EOF

  # Tags
  tags = {
    Owner       = "eguru_prod"
    Environment = "prod"
    Terraform   = true
  }

}




# ------------------------------------------------------------------------------
# CONFIGURE OUR AWS VPC
# /26 => 64 Usable Addresses
# ------------------------------------------------------------------------------
resource "aws_vpc" "eguru_vpc" {
  cidr_block       = "10.0.0.0/26"
  instance_tenancy = "default"

  tags = {
    Name = "eguru-vpc"
  }
}


# ------------------------------------------------------------------------------
# CONFIGURE OUR AWS SUBNET
# ------------------------------------------------------------------------------
resource "aws_subnet" "main" {
  vpc_id     = aws_vpc.eguru_vpc.id
  cidr_block = "10.0.0.0/28"

  tags = {
    Name = "eguru_public_subnet"
  }
}
