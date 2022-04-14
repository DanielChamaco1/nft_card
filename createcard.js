export function createCard(item){
    const ima_nft=document.createElement("img")
    ima_nft.src=item.image_nft

    const tarj_nfc= document.createElement("div")
    tarj_nfc.className="tarjeta_nfc_img"
    tarj_nfc.append(ima_nft)

    const cabezera=document.createElement("div")
    cabezera.className="tarjeta_cabecera"
    cabezera.append(tarj_nfc) //importante 1

    const dire=document.createElement("a")
    
    const tarj_tit=document.createElement("h3")
    tarj_tit.className="tarjeta_titulo"
    tarj_tit.textContent=item.tarj_tit
    dire.append(tarj_tit)

    const parrafo=document.createElement("p")
    parrafo.className="tarjeta_texto"
    parrafo.textContent=item.texto

    const precio=document.createElement("div")
    precio.className="tarjeta_precio"

    const img_etr=document.createElement("img")
    img_etr.className="tarjeta_icono"
    img_etr.src=item.img_pre
    

    const spanP=document.createElement("span")
    spanP.textContent=item.pre
    precio.append(img_etr,spanP)

    const reloj=document.createElement("div")
    reloj.className="tarjeta_reloj"

    const img_rej=document.createElement("img")
    img_rej.className="tarjeta_icono"
    img_rej.src=item.img_reloj
    

    const spanR=document.createElement("span")
    spanR.textContent=item.di
    reloj.append(img_rej,spanR)

    const cubiertaT=document.createElement("div")
    cubiertaT.className="cubierta"
    cubiertaT.append(precio.reloj)

    const cuerpo= document.createElement("div")
    cuerpo.className="tarjeta_cuerpo"
    cuerpo.append(dire,precio,reloj) //importante

    const tarj_abajo=document.createElement("div")
    tarj_abajo.className="tarjeta_abajo"

    const img_avatar=document.createElement("img")
    img_avatar.className="tarjeta_icono"
    img_avatar.textContent=item.img_autor

    const P_autor=document.createElement("p")
    P_autor.className="tarjeta_autor_nombre"
    P_autor.textContent=item.crea

    const autor_d=document.createElement("a")
    autor_d.textContent=item.nombre

    P_autor.append(autor_d)

    tarj_abajo.append(img_avatar,P_autor)


    const tarj=document.createElement("div")
    tarj.className="tarjeta"
    tarj.append(cabezera,cuerpo,tarj_abajo)

    return tarj











}