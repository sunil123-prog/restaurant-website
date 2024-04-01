let desr=document.getElementsByClassName("desc")
        let ire=document.getElementsByClassName("zz")
        let p=0

    let fun=(ind)=>{
        if(ind==p)
        {
        if(ire[ind].classList.contains('fa-minus'))
        {
            ire[ind].className="fa-solid fa-plus zz"
            desr[ind].style.display="none"
            console.log("plus")
        }
        else{
            ire[ind].className="fa-solid fa-minus zz"
            desr[ind].style.display="block"
            console.log("minus",ind,ire[ind])
        }
    }
    else
    {
        ire[p].className="fa-solid fa-plus zz"
        desr[p].style.display="none"
        ire[ind].className="fa-solid fa-minus zz"
        desr[ind].style.display="block"
        p=ind
        console.log("plus")
    }
}