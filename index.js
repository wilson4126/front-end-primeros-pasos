    fetch("https://randomuser.me/api/")
        .then(response=> response.json())
        .then(json => console.log(JSON.parse(persona)))

        
        function Opcion(event, target){
            if(sessionStorage.getItem("Opcion")){
                document.getElementById(sessionStorage.getItem("Opcion")).classList.add("d-none")
            }
            sessionStorage.setItem("Opcion", target)
            document.getElementById(target).classList.remove("d-none")
        }