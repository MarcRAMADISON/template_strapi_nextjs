export const handleNavigation=(type:string)=>{
    const element = document.getElementById(type);

    element && element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

}