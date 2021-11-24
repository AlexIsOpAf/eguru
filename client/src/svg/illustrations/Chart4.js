import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const Chart4 = ({ width = 274, height = 208 }) => {
  const theme = useTheme();
  const colorPaper = theme.palette.background.paper;
  const colorPrimaryMain = theme.palette.primary.main;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 274 208"
    >
      <rect width={width} height={height} fill={colorPaper} rx="12"></rect>
      <path
        fill={colorPrimaryMain}
        d="M33.004 42V31.818h3.898c1.104 0 1.929.25 2.476.75.55.501.825 1.131.825 1.89 0 .62-.172 1.107-.517 1.462a2.52 2.52 0 01-1.263.706v.1c.362.016.708.125 1.04.327.334.202.608.488.82.855.212.365.318.804.318 1.318 0 .527-.128 1-.383 1.422-.255.417-.64.747-1.153.99-.514.241-1.16.362-1.94.362h-4.12zm1.845-1.541h1.983c.67 0 1.152-.128 1.447-.383.298-.258.448-.59.448-.994a1.5 1.5 0 00-.498-1.144c-.328-.308-.777-.462-1.347-.462H34.85v2.983zm0-4.31h1.824c.48 0 .882-.13 1.203-.388.322-.262.483-.617.483-1.064 0-.395-.14-.72-.418-.975-.275-.255-.684-.383-1.228-.383H34.85v2.81zm8.659-2.785v-1.546h8.124v1.546h-3.147V42h-1.83v-8.636h-3.147zm19.717 1.89h-1.86c-.105-.61-.38-1.083-.824-1.417-.444-.335-.976-.503-1.596-.503-.832 0-1.513.309-2.044.925-.53.617-.795 1.5-.795 2.65 0 1.167.265 2.055.795 2.665.534.606 1.213.91 2.039.91.61 0 1.137-.161 1.58-.483.448-.324.73-.785.846-1.382l1.86.01a4.006 4.006 0 01-2.183 3.038c-.61.315-1.32.472-2.128.472-.895 0-1.694-.207-2.396-.621-.703-.418-1.256-1.016-1.66-1.795-.405-.782-.607-1.72-.607-2.814 0-1.097.203-2.035.611-2.814.408-.782.963-1.38 1.666-1.795.706-.414 1.501-.621 2.386-.621.752 0 1.433.14 2.043.423a3.88 3.88 0 011.517 1.223c.397.53.648 1.173.75 1.929zm7.516-3.913L67.46 43.53h-1.576l3.281-12.19h1.576zm9.401.477h1.84v6.732c0 .769-.18 1.422-.542 1.959a3.448 3.448 0 01-1.477 1.227c-.623.279-1.327.418-2.112.418-.786 0-1.49-.14-2.113-.418a3.448 3.448 0 01-1.477-1.227c-.361-.537-.542-1.19-.542-1.96v-6.73h1.845v6.686c0 .418.1.776.303 1.074.205.295.48.522.825.68.348.157.734.235 1.159.235.427 0 .813-.078 1.158-.234.348-.16.623-.386.825-.681.206-.298.308-.656.308-1.074v-6.687zm11.128 2.8a1.362 1.362 0 00-.582-1.015c-.341-.242-.787-.363-1.337-.363-.577 0-1.027.126-1.352.378-.325.248-.49.565-.492.95a.973.973 0 00.253.7c.172.183.391.329.656.438.269.11.542.197.82.263l.955.24c.51.118.993.296 1.447.531.457.232.829.544 1.114.935.288.388.432.876.432 1.466-.003.898-.343 1.626-1.019 2.183-.676.553-1.624.83-2.844.83-1.186 0-2.133-.273-2.839-.82-.706-.55-1.077-1.33-1.113-2.342h1.814c.037.534.256.931.657 1.193.4.262.89.393 1.466.393.603 0 1.092-.133 1.467-.398.374-.268.563-.62.567-1.054a.992.992 0 00-.507-.895c-.332-.205-.773-.377-1.323-.517l-1.158-.298c-.839-.215-1.502-.542-1.989-.98-.484-.44-.726-1.025-.726-1.754 0-.6.163-1.125.487-1.576.325-.45.77-.8 1.333-1.05.567-.251 1.206-.377 1.919-.377.722 0 1.357.126 1.904.378.547.248.974.595 1.283 1.039.311.44.472.948.482 1.521H91.27zM100.03 42h-3.45V31.818h3.519c1.011 0 1.88.204 2.605.612.73.404 1.29.986 1.681 1.745.391.759.587 1.667.587 2.724 0 1.06-.198 1.972-.592 2.734a4.088 4.088 0 01-1.695 1.755c-.736.408-1.621.612-2.655.612zm-1.606-1.596h1.516c2.135 0 3.202-1.168 3.202-3.505 0-2.323-1.049-3.485-3.147-3.485h-1.571v6.99z"
      ></path>
      <path
        fill={colorPrimaryMain}
        d="M33.233 66V55.818h3.56c.709 0 1.294.123 1.755.368.46.242.803.569 1.029.98.225.407.338.86.338 1.357 0 .437-.078.798-.234 1.083-.152.286-.354.511-.606.677a2.762 2.762 0 01-.81.368v.099c.31.02.624.13.939.328.315.199.578.484.79.855.212.371.319.825.319 1.362 0 .51-.117.97-.349 1.378-.231.407-.598.73-1.098.969-.5.239-1.152.358-1.954.358h-3.679zm1.233-1.094h2.446c.805 0 1.377-.156 1.715-.467.341-.315.512-.696.512-1.143 0-.345-.088-.663-.263-.955a1.907 1.907 0 00-.751-.706c-.325-.179-.71-.268-1.153-.268h-2.506v3.54zm0-4.613h2.287c.557 0 1.027-.161 1.412-.483.384-.321.577-.75.577-1.287a1.55 1.55 0 00-.468-1.139c-.311-.315-.805-.472-1.481-.472h-2.327v3.38zM41.722 66v-7.636h1.173V66h-1.173zm.596-8.91a.834.834 0 01-.591-.233.75.75 0 01-.244-.562.75.75 0 01.244-.561.834.834 0 01.591-.234c.229 0 .425.078.587.234a.744.744 0 01.248.561.744.744 0 01-.248.562.817.817 0 01-.587.234zm5.59 1.274v.994h-1.631v4.455c0 .33.048.58.144.745.1.163.225.272.378.328.155.053.32.08.492.08.129 0 .235-.007.318-.02l.199-.04.238 1.054c-.08.03-.19.06-.333.09-.142.033-.323.05-.542.05-.331 0-.656-.072-.974-.214a1.937 1.937 0 01-.786-.652c-.205-.291-.308-.66-.308-1.103v-4.773H43.95v-.994h1.153v-1.83h1.174v1.83h1.63zm4.327 7.795c-.716 0-1.333-.169-1.85-.507a3.305 3.305 0 01-1.193-1.397c-.278-.593-.417-1.271-.417-2.033 0-.776.142-1.46.427-2.054a3.38 3.38 0 011.203-1.397c.517-.338 1.12-.507 1.81-.507.537 0 1.02.1 1.451.298.431.2.784.478 1.06.836.275.358.445.775.511 1.253h-1.173c-.09-.348-.288-.657-.596-.925-.305-.272-.716-.408-1.233-.408-.686 0-1.24.262-1.66.786-.418.52-.627 1.213-.627 2.078 0 .885.207 1.594.621 2.128.414.53.97.795 1.666.795.457 0 .848-.118 1.173-.353.328-.235.547-.562.656-.98h1.173c-.066.452-.23.857-.492 1.219a2.751 2.751 0 01-1.029.855c-.424.209-.918.313-1.481.313zm7.362 0c-.69 0-1.294-.164-1.814-.492a3.344 3.344 0 01-1.213-1.377c-.289-.59-.433-1.28-.433-2.068 0-.796.144-1.49.433-2.084a3.337 3.337 0 011.213-1.382c.52-.328 1.125-.492 1.814-.492.69 0 1.293.164 1.81.492.52.328.925.79 1.213 1.383.292.593.438 1.287.438 2.083 0 .788-.146 1.478-.438 2.068a3.298 3.298 0 01-1.213 1.377c-.517.328-1.12.492-1.81.492zm0-1.054c.524 0 .955-.134 1.293-.403.338-.268.588-.621.75-1.058.163-.438.244-.912.244-1.422 0-.51-.08-.986-.243-1.427a2.404 2.404 0 00-.751-1.07c-.338-.27-.769-.407-1.293-.407-.523 0-.954.136-1.292.408a2.404 2.404 0 00-.751 1.069c-.162.44-.244.916-.244 1.427 0 .51.082.984.244 1.422.162.437.413.79.75 1.058.339.269.77.403 1.293.403zm4.794.895v-7.636h1.173V66h-1.173zm.596-8.91a.834.834 0 01-.591-.233.75.75 0 01-.244-.562.75.75 0 01.244-.561.834.834 0 01.591-.234c.23 0 .425.078.587.234a.744.744 0 01.249.561.744.744 0 01-.249.562.817.817 0 01-.587.234zm3.442 4.316V66h-1.174v-7.636h1.134v1.193h.1c.178-.388.45-.7.815-.935.364-.239.835-.358 1.412-.358.772 0 1.395.237 1.869.711.477.474.716 1.198.716 2.173V66h-1.173v-4.773c0-.6-.156-1.067-.468-1.402-.311-.338-.739-.507-1.282-.507-.56 0-1.026.183-1.397.547-.368.361-.552.875-.552 1.541zm11.967-1.332l-1.054.298a2.08 2.08 0 00-.517-.746c-.242-.232-.62-.348-1.133-.348-.468 0-.857.108-1.169.324-.308.212-.462.482-.462.81 0 .292.106.522.318.691.212.169.544.31.995.423l1.133.278c1.352.331 2.028 1.02 2.028 2.068 0 .438-.125.829-.377 1.174-.249.344-.597.616-1.044.815-.448.199-.968.298-1.562.298-.778 0-1.423-.169-1.933-.507-.51-.338-.834-.832-.97-1.481l1.114-.279c.209.822.798 1.233 1.77 1.233.546 0 .98-.116 1.302-.348.325-.235.487-.517.487-.845 0-.54-.377-.898-1.133-1.074l-1.273-.298c-.7-.166-1.213-.423-1.541-.77-.325-.352-.487-.791-.487-1.318 0-.431.12-.812.363-1.144a2.47 2.47 0 01.999-.78 3.509 3.509 0 011.442-.284c.755 0 1.349.166 1.78.497.434.332.742.77.924 1.313zm8.249-1.71v.994h-1.63v4.455c0 .33.047.58.143.745.1.163.226.272.378.328.156.053.32.08.492.08.13 0 .236-.007.319-.02l.198-.04.239 1.054c-.08.03-.19.06-.333.09a2.45 2.45 0 01-.542.05c-.331 0-.656-.072-.974-.214a1.937 1.937 0 01-.786-.652c-.205-.291-.308-.66-.308-1.103v-4.773h-1.154v-.994h1.154v-1.83h1.173v1.83h1.63zm4.327 7.795c-.69 0-1.294-.164-1.814-.492a3.344 3.344 0 01-1.213-1.377c-.289-.59-.433-1.28-.433-2.068 0-.796.144-1.49.433-2.084a3.337 3.337 0 011.213-1.382c.52-.328 1.125-.492 1.814-.492.69 0 1.293.164 1.81.492.52.328.925.79 1.213 1.383.292.593.438 1.287.438 2.083 0 .788-.146 1.478-.438 2.068a3.298 3.298 0 01-1.213 1.377c-.517.328-1.12.492-1.81.492zm0-1.054c.524 0 .955-.134 1.293-.403.338-.268.588-.621.75-1.058.163-.438.244-.912.244-1.422 0-.51-.081-.986-.243-1.427a2.405 2.405 0 00-.751-1.07c-.338-.27-.77-.407-1.293-.407-.523 0-.954.136-1.292.408a2.405 2.405 0 00-.751 1.069c-.163.44-.244.916-.244 1.427 0 .51.081.984.244 1.422.162.437.413.79.75 1.058.339.269.77.403 1.293.403zm15.115-9.287h1.232v6.742c0 .762-.18 1.413-.541 1.953-.362.54-.842.953-1.442 1.238a4.54 4.54 0 01-1.974.428 4.54 4.54 0 01-1.974-.428 3.51 3.51 0 01-1.441-1.238c-.362-.54-.542-1.191-.542-1.953v-6.742h1.233v6.742c0 .53.126.98.378 1.347.251.365.584.643.999.835.414.19.863.284 1.347.284s.933-.095 1.347-.284c.415-.192.748-.47 1-.835.252-.368.378-.817.378-1.347v-6.742zm8.805 2.546a1.56 1.56 0 00-.726-1.174c-.424-.278-.944-.417-1.561-.417-.676 0-1.219.16-1.63.482-.411.318-.617.72-.617 1.208 0 .365.111.66.333.885.226.222.491.396.796.522.308.123.588.217.84.283l1.034.279c.265.07.56.165.885.288.328.123.641.29.939.502.302.21.551.478.746.806.196.328.294.73.294 1.208 0 .55-.145 1.047-.433 1.491-.285.444-.703.797-1.253 1.06-.547.261-1.211.392-1.993.392-1.094 0-1.963-.258-2.606-.776-.643-.517-.994-1.193-1.054-2.028h1.273c.033.385.163.703.388.954.229.25.517.435.865.557.351.12.729.18 1.134.18.47 0 .893-.077 1.267-.23.375-.155.671-.37.89-.646a1.53 1.53 0 00.328-.974c0-.338-.094-.613-.283-.825a2.084 2.084 0 00-.746-.517 7.808 7.808 0 00-.999-.348l-1.253-.358c-.795-.23-1.425-.556-1.889-.98-.464-.424-.696-.98-.696-1.665 0-.57.154-1.068.462-1.492a3.073 3.073 0 011.253-.994 4.23 4.23 0 011.765-.358c.656 0 1.24.118 1.75.353.51.232.915.55 1.213.955.302.404.461.863.477 1.377h-1.193zM126.416 66h-3.142V55.818h3.281c.988 0 1.833.204 2.536.612a4.002 4.002 0 011.615 1.745c.375.755.562 1.66.562 2.714 0 1.06-.189 1.974-.567 2.74a4.035 4.035 0 01-1.65 1.76c-.723.407-1.601.611-2.635.611zm-1.909-1.094h1.829c1.263 0 2.201-.358 2.814-1.074.617-.719.925-1.7.925-2.943 0-1.233-.302-2.204-.905-2.913-.603-.71-1.501-1.064-2.694-1.064h-1.969v7.994zm11.315 1.253c-.69 0-1.294-.164-1.815-.492a3.346 3.346 0 01-1.213-1.377c-.288-.59-.432-1.28-.432-2.068 0-.796.144-1.49.432-2.084a3.34 3.34 0 011.213-1.382c.521-.328 1.125-.492 1.815-.492.689 0 1.292.164 1.809.492.521.328.925.79 1.214 1.383.291.593.437 1.287.437 2.083 0 .788-.146 1.478-.437 2.068a3.3 3.3 0 01-1.214 1.377c-.517.328-1.12.492-1.809.492zm0-1.054c.523 0 .954-.134 1.292-.403.338-.268.589-.621.751-1.058.163-.438.244-.912.244-1.422 0-.51-.081-.986-.244-1.427a2.402 2.402 0 00-.751-1.07c-.338-.27-.769-.407-1.292-.407-.524 0-.955.136-1.293.408a2.41 2.41 0 00-.751 1.069c-.162.44-.243.916-.243 1.427 0 .51.081.984.243 1.422.163.437.413.79.751 1.058.338.269.769.403 1.293.403zm5.967-9.287V66h-1.174V55.818h1.174zm2.864 0V66h-1.173V55.818h1.173zm3.939 10.361c-.484 0-.923-.091-1.318-.273a2.262 2.262 0 01-.939-.8c-.232-.352-.348-.776-.348-1.274 0-.437.086-.792.258-1.063.172-.276.403-.491.691-.647.288-.156.607-.272.955-.348.351-.08.704-.142 1.059-.189.464-.06.84-.104 1.128-.134.292-.033.504-.088.637-.164.135-.076.203-.209.203-.398v-.04c0-.49-.134-.871-.402-1.143-.265-.272-.668-.408-1.208-.408-.561 0-1 .123-1.318.368-.318.245-.542.507-.671.786l-1.114-.398c.199-.464.464-.825.796-1.084a2.978 2.978 0 011.094-.547 4.53 4.53 0 011.173-.159c.245 0 .527.03.845.09.321.056.631.174.93.353.301.179.552.449.75.81.199.361.299.845.299 1.452V66h-1.174v-1.034h-.059a2.07 2.07 0 01-.398.532c-.186.189-.433.35-.741.482-.308.133-.684.199-1.128.199zm.179-1.054c.464 0 .855-.091 1.173-.273a1.87 1.87 0 00.726-.706c.166-.289.248-.592.248-.91v-1.074c-.049.06-.159.114-.328.164a5.531 5.531 0 01-.576.124 26.457 26.457 0 01-1.124.15c-.305.04-.59.104-.855.193a1.479 1.479 0 00-.637.393c-.159.172-.238.408-.238.706 0 .408.151.716.452.925.305.205.691.308 1.159.308zm5.004.875v-7.636h1.134v1.153h.08c.135-.378.386-.684.75-.92a2.234 2.234 0 011.238-.353c.212 0 .398.025.557.075.159.05.298.118.418.204l-.398.994a1.14 1.14 0 00-.293-.1 1.642 1.642 0 00-.383-.04c-.557 0-1.018.171-1.382.513a1.667 1.667 0 00-.547 1.278V66h-1.174zm10.325-5.926l-1.054.298a2.083 2.083 0 00-.517-.746c-.242-.232-.62-.348-1.134-.348-.467 0-.856.108-1.168.324-.308.212-.462.482-.462.81 0 .292.106.522.318.691.212.169.543.31.994.423l1.134.278c1.352.331 2.028 1.02 2.028 2.068 0 .438-.126.829-.378 1.174-.248.344-.596.616-1.044.815-.447.199-.968.298-1.561.298-.779 0-1.423-.169-1.934-.507-.51-.338-.833-.832-.969-1.481l1.113-.279c.209.822.799 1.233 1.77 1.233.547 0 .981-.116 1.303-.348.325-.235.487-.517.487-.845 0-.54-.378-.898-1.133-1.074l-1.273-.298c-.7-.166-1.213-.423-1.541-.77-.325-.352-.488-.791-.488-1.318 0-.431.121-.812.363-1.144a2.477 2.477 0 011-.78 3.504 3.504 0 011.441-.284c.756 0 1.349.166 1.78.497.434.332.743.77.925 1.313z"
        opacity="0.6"
      ></path>
      <path
        fill={colorPrimaryMain}
        d="M40.54 173.636c0 .929-.17 1.729-.512 2.4-.34.67-.808 1.186-1.402 1.546-.59.358-1.262.537-2.015.537-.756 0-1.43-.179-2.024-.537-.591-.36-1.057-.876-1.398-1.546-.341-.671-.511-1.471-.511-2.4 0-.931.17-1.731.51-2.399.342-.67.808-1.184 1.399-1.542.593-.361 1.268-.542 2.024-.542.753 0 1.425.181 2.015.542.594.358 1.062.872 1.402 1.542.341.668.512 1.468.512 2.399zm-1.304 0c0-.71-.115-1.308-.345-1.794-.228-.488-.54-.858-.938-1.108a2.442 2.442 0 00-1.342-.379c-.5 0-.95.127-1.347.379-.395.25-.707.62-.937 1.108-.228.486-.341 1.084-.341 1.794 0 .708.113 1.306.34 1.794.23.489.543.86.938 1.113.398.25.847.375 1.347.375s.947-.125 1.342-.375c.398-.253.71-.624.938-1.113.23-.488.345-1.086.345-1.794zm3.725.478V178h-1.274v-6.545h1.223v1.065h.08c.151-.347.387-.625.708-.835.324-.211.732-.316 1.223-.316.67 0 1.21.209 1.615.627.41.417.614 1.031.614 1.841V178h-1.274v-4.01c0-.474-.124-.845-.37-1.112-.248-.27-.588-.405-1.02-.405-.443 0-.808.143-1.095.43-.286.284-.43.688-.43 1.211zm11.31 4.005c-.588 0-1.11-.101-1.568-.302a2.665 2.665 0 01-1.087-.84 2.228 2.228 0 01-.426-1.253h1.338c.026.387.203.694.533.921.33.227.73.341 1.202.341.514 0 .936-.131 1.265-.392.333-.264.499-.608.499-1.032 0-.44-.168-.798-.503-1.073-.332-.279-.801-.418-1.406-.418h-.737v-1.074h.737c.483 0 .878-.128 1.184-.383.307-.256.46-.594.456-1.015.003-.403-.13-.728-.4-.975-.267-.248-.624-.371-1.07-.371a1.92 1.92 0 00-1.133.345 1.14 1.14 0 00-.507.942h-1.275a2.16 2.16 0 01.418-1.249c.267-.358.62-.636 1.057-.835a3.435 3.435 0 011.457-.303c.56 0 1.044.11 1.453.329.41.218.725.508.947.869.221.358.33.751.328 1.18.002.489-.133.904-.405 1.245-.273.34-.638.569-1.095.686v.068c.58.088 1.028.318 1.346.69.321.372.48.834.477 1.385a2.18 2.18 0 01-.396 1.296 2.735 2.735 0 01-1.1.894c-.465.216-.995.324-1.589.324zm7.342.026c-1.008-.003-1.794-.398-2.356-1.185-.563-.787-.844-1.893-.844-3.319.003-1.421.287-2.523.852-3.307.566-.787 1.348-1.181 2.348-1.181 1 0 1.783.394 2.348 1.181.566.784.848 1.886.848 3.307 0 1.429-.28 2.537-.843 3.323-.56.787-1.344 1.181-2.353 1.181zm0-1.138c.588 0 1.05-.288 1.385-.865.336-.577.503-1.41.503-2.501 0-1.088-.169-1.922-.507-2.502-.335-.579-.795-.869-1.38-.869-.589 0-1.05.29-1.386.869-.335.58-.504 1.414-.507 2.502 0 1.091.168 1.924.503 2.501.335.577.798.865 1.39.865zm10.61-7.734h1.313v6.187c-.003.838-.246 1.492-.729 1.96-.483.466-1.125.699-1.926.699-.491 0-.933-.089-1.325-.268a2.18 2.18 0 01-.925-.78c-.224-.344-.336-.761-.336-1.253h1.308c.003.361.125.649.366.865.245.213.56.32.946.32.418 0 .739-.131.963-.392.228-.264.343-.648.346-1.151v-6.187zm6.881 6.013v-3.831h1.279V178H79.13v-1.134h-.068a2.04 2.04 0 01-.725.874c-.33.23-.74.345-1.231.345-.628 0-1.144-.207-1.547-.622-.4-.418-.601-1.033-.601-1.845v-4.163h1.274v4.009c0 .447.124.802.37 1.066.248.264.57.396.964.396.239 0 .476-.06.712-.179a1.5 1.5 0 00.592-.541c.16-.244.237-.551.234-.92zm3.873-1.172V178h-1.275v-6.545h1.224v1.065h.08c.151-.347.387-.625.708-.835.324-.211.731-.316 1.223-.316.67 0 1.209.209 1.615.627.409.417.613 1.031.613 1.841V178h-1.274v-4.01c0-.474-.123-.845-.37-1.112-.248-.27-.587-.405-1.019-.405-.443 0-.808.143-1.095.43-.287.284-.43.688-.43 1.211zm8.326 4.018c-.642 0-1.196-.139-1.662-.418a2.795 2.795 0 01-1.078-1.171c-.25-.506-.375-1.097-.375-1.773 0-.671.125-1.261.375-1.773.253-.511.605-.91 1.057-1.197.454-.287.986-.431 1.593-.431.495 0 .962.111 1.403.333.443.218.802.569 1.078 1.052.278.48.417 1.115.417 1.905v.452h-4.653c.017.63.195 1.116.532 1.457.339.341.78.512 1.326.512.364 0 .677-.079.942-.235.264-.156.453-.389.566-.699l1.206.218c-.145.531-.457.958-.937 1.282-.48.324-1.077.486-1.79.486zm-1.84-3.976h3.4c-.003-.5-.154-.913-.452-1.24-.298-.329-.695-.494-1.189-.494-.344 0-.645.081-.903.243a1.766 1.766 0 00-.61.635c-.147.261-.23.547-.247.856zM97.898 178v-.955l2.953-3.059c.313-.333.573-.624.78-.874a3.34 3.34 0 00.465-.72c.102-.227.153-.469.153-.724 0-.435-.149-.779-.447-1.032-.299-.255-.67-.383-1.113-.383-.471 0-.848.142-1.129.426-.278.281-.416.656-.413 1.125H97.89c0-.531.122-.996.366-1.393a2.49 2.49 0 011.006-.925c.426-.222.91-.333 1.453-.333.548 0 1.031.11 1.449.329.42.215.748.511.984.886.236.372.354.793.354 1.261 0 .324-.061.641-.183.951-.12.309-.329.654-.627 1.035-.295.378-.71.837-1.244 1.376l-1.735 1.816v.064h3.929V178h-5.744zm10.006.145c-1.009-.003-1.795-.398-2.357-1.185-.563-.787-.844-1.893-.844-3.319.003-1.421.287-2.523.853-3.307.565-.787 1.348-1.181 2.348-1.181 1 0 1.782.394 2.348 1.181.565.784.848 1.886.848 3.307 0 1.429-.282 2.537-.844 3.323-.56.787-1.344 1.181-2.352 1.181zm0-1.138c.588 0 1.049-.288 1.384-.865.336-.577.503-1.41.503-2.501 0-1.088-.169-1.922-.507-2.502-.335-.579-.795-.869-1.38-.869-.589 0-1.05.29-1.385.869-.336.58-.505 1.414-.508 2.502 0 1.091.168 1.924.503 2.501.336.577.799.865 1.39.865zm4.315.993v-.955l2.953-3.059c.313-.333.573-.624.78-.874.207-.253.362-.493.464-.72.103-.227.154-.469.154-.724 0-.435-.149-.779-.448-1.032-.298-.255-.669-.383-1.112-.383-.471 0-.848.142-1.129.426-.279.281-.416.656-.413 1.125h-1.258c0-.531.123-.996.367-1.393a2.483 2.483 0 011.006-.925c.426-.222.91-.333 1.453-.333.548 0 1.031.11 1.449.329.42.215.748.511.984.886.236.372.354.793.354 1.261 0 .324-.061.641-.184.951-.119.309-.328.654-.626 1.035-.295.378-.71.837-1.244 1.376l-1.735 1.816v.064h3.929V178h-5.744zm10.005.145c-1.008-.003-1.794-.398-2.356-1.185-.563-.787-.844-1.893-.844-3.319.003-1.421.287-2.523.852-3.307.566-.787 1.348-1.181 2.348-1.181 1 0 1.783.394 2.348 1.181.566.784.848 1.886.848 3.307 0 1.429-.281 2.537-.843 3.323-.56.787-1.344 1.181-2.353 1.181zm0-1.138c.588 0 1.05-.288 1.385-.865.336-.577.503-1.41.503-2.501 0-1.088-.169-1.922-.507-2.502-.335-.579-.795-.869-1.381-.869-.588 0-1.049.29-1.385.869-.335.58-.504 1.414-.507 2.502 0 1.091.168 1.924.503 2.501.335.577.798.865 1.389.865z"
      ></path>
      <path
        fill={colorPrimaryMain}
        d="M38.477 120.199a5.73 5.73 0 01-1.91-.348 4.55 4.55 0 01-1.712-1.144c-.511-.53-.92-1.243-1.229-2.137-.303-.895-.454-2.013-.454-3.353 0-1.699.222-3.144.668-4.332.445-1.193 1.077-2.102 1.896-2.727.824-.625 1.799-.938 2.926-.938.866 0 1.636.173 2.308.519.672.341 1.22.814 1.64 1.42.422.601.687 1.293.796 2.074H41.24c-.147-.62-.438-1.122-.873-1.506-.436-.388-1.004-.582-1.705-.582-1.065 0-1.896.464-2.493 1.392-.592.928-.89 2.228-.895 3.899h.107a3.973 3.973 0 011.505-1.442 4.279 4.279 0 012.103-.525c.842 0 1.607.206 2.294.618.686.407 1.233.97 1.64 1.69.407.72.609 1.544.604 2.472.005.928-.204 1.768-.625 2.521a4.69 4.69 0 01-1.769 1.79c-.757.435-1.643.648-2.656.639zm-.007-1.847c.554 0 1.051-.137 1.492-.412a2.95 2.95 0 001.05-1.108c.261-.464.389-.982.384-1.555a3.054 3.054 0 00-.369-1.527 2.9 2.9 0 00-1.03-1.094 2.724 2.724 0 00-1.477-.405c-.559 0-1.063.142-1.513.427-.445.279-.8.651-1.065 1.115-.26.459-.393.961-.398 1.505a3.084 3.084 0 001.42 2.635c.44.28.943.419 1.506.419zM45.95 120l6.35-12.557v-.106h-7.344v-1.882h9.616v1.946L48.244 120H45.95zm15.552-14.545V120H59.3v-11.584h-.12c-.119.213-.448.448-.988.703-.54.251-1.221.377-2.045.377v-1.804c.53 0 .997-.095 1.399-.284.407-.19.748-.417 1.023-.682a4.2 4.2 0 00.632-.76c.151-.242.237-.412.255-.511h2.046zm6.067 12.556l-.107.775c-.07.568-.19 1.16-.355 1.775-.166.62-.338 1.196-.519 1.726-.18.53-.326.952-.44 1.264h-1.505c.066-.293.151-.691.255-1.193.11-.497.216-1.054.32-1.669.104-.616.182-1.243.234-1.882l.071-.796h2.046zM69.885 120v-1.591l4.922-5.099c.521-.554.954-1.04 1.3-1.456.346-.422.604-.822.774-1.201.17-.378.256-.781.256-1.207 0-.724-.249-1.297-.746-1.719-.497-.426-1.115-.639-1.854-.639-.786 0-1.413.237-1.882.71-.464.469-.693 1.094-.689 1.875h-2.095c0-.885.204-1.659.61-2.322a4.143 4.143 0 011.677-1.541c.71-.37 1.518-.554 2.422-.554.914 0 1.719.182 2.415.547.7.359 1.247.852 1.64 1.477.393.62.59 1.321.59 2.102a4.28 4.28 0 01-.306 1.584c-.198.516-.546 1.091-1.044 1.726-.492.629-1.183 1.394-2.073 2.294l-2.891 3.025v.107h6.548V120h-9.574zm16.676.199c-.98 0-1.851-.168-2.614-.504-.762-.337-1.366-.803-1.81-1.4-.441-.601-.678-1.297-.71-2.088h2.23c.042.644.338 1.156.887 1.534.55.379 1.217.569 2.003.569.857 0 1.56-.218 2.11-.654.553-.44.83-1.013.83-1.718 0-.734-.28-1.331-.838-1.79-.554-.464-1.335-.696-2.344-.696h-1.228v-1.79h1.228c.805 0 1.463-.213 1.975-.639.511-.426.764-.99.76-1.691.004-.672-.218-1.214-.668-1.626-.445-.412-1.04-.618-1.783-.618-.715 0-1.344.192-1.889.575-.54.379-.821.902-.845 1.57h-2.124c.024-.791.256-1.484.697-2.081.445-.597 1.032-1.061 1.76-1.392.73-.336 1.54-.504 2.43-.504.933 0 1.74.182 2.422.547.681.364 1.207.847 1.576 1.448.37.597.552 1.253.547 1.968.005.814-.22 1.505-.674 2.074-.455.568-1.063.949-1.826 1.143v.114c.966.146 1.714.53 2.245 1.15.535.621.8 1.39.795 2.309a3.633 3.633 0 01-.66 2.159c-.446.629-1.056 1.127-1.833 1.491-.776.36-1.66.54-2.649.54z"
      ></path>
      <path
        fill={colorPrimaryMain}
        fillRule="evenodd"
        d="M106.775 110.475a.625.625 0 010 .884l-3.333 3.333a.625.625 0 01-.884 0l-3.333-3.333a.625.625 0 01.883-.884l2.892 2.891 2.891-2.891a.625.625 0 01.884 0z"
        clipRule="evenodd"
      ></path>
      <path fill={colorPrimaryMain} d="M184 41H186V66H184z"></path>
      <path fill={colorPrimaryMain} d="M180 45H182V66H180z"></path>
      <path fill={colorPrimaryMain} d="M188 51H190V66H188z"></path>
      <path fill={colorPrimaryMain} d="M196 47H198V66H196z"></path>
      <path fill={colorPrimaryMain} d="M192 32H194V66H192z"></path>
      <path fill={colorPrimaryMain} d="M200 34H202V66H200z"></path>
      <path fill={colorPrimaryMain} d="M208 55H210V66H208z"></path>
      <path fill={colorPrimaryMain} d="M204 37H206V66H204z"></path>
      <path fill={colorPrimaryMain} d="M212 49H214V66H212z"></path>
      <path fill={colorPrimaryMain} d="M220 47H222V66H220z"></path>
      <path fill={colorPrimaryMain} d="M216 42H218V66H216z"></path>
      <path fill={colorPrimaryMain} d="M224 36H226V66H224z"></path>
      <path fill={colorPrimaryMain} d="M228 52H230V66H228z"></path>
      <path fill={colorPrimaryMain} d="M236 32H238V66H236z"></path>
      <path fill={colorPrimaryMain} d="M240 44H242V66H240z"></path>
      <path fill={colorPrimaryMain} d="M232 38H234V66H232z"></path>
      <path
        fill="#EAEDEE"
        d="M14 4h246V0H14v4zm256 10v180h4V14h-4zm-10 190H14v4h246v-4zM4 194V14H0v180h4zm10 10c-5.523 0-10-4.477-10-10H0c0 7.732 6.268 14 14 14v-4zm256-10c0 5.523-4.477 10-10 10v4c7.732 0 14-6.268 14-14h-4zM260 4c5.523 0 10 4.477 10 10h4c0-7.732-6.268-14-14-14v4zM14 0C6.268 0 0 6.268 0 14h4C4 8.477 8.477 4 14 4V0z"
      ></path>
    </svg>
  );
};

Chart4.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Chart4;
