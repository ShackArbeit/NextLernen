

const Docs = ({params}:{
    params:{
        slug:string[]
    }
}) => {
    if(params.slug?.length===2){
        return (
            <h1>Viewing Docs for features {params.slug[0]} and Concept {params.slug[1]} </h1>
          )
    }else if(params.slug?.length===1){
        return (
            <h1>Viewing Docs for features {params.slug[0]}  </h1>
          )
    }else{
        return(
            <h1>Home Docs Page</h1>
        )
    }
 
}

export default Docs