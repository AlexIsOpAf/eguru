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
provider "aws" {}


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



resource "aws_subnet" "main" {
  vpc_id     = aws_vpc.eguru_vpc.id
  cidr_block = "10.0.0.0/28"

  tags = {
    Name = "eguru_public_subnet"
  }
}