import Card from './Card';


export default function Breeds ({breeds, noadopt, adopt}){
    
    return(
        <div>
            <h1>Pet a Dog</h1>
            <div>
                {
                    breeds.map((breed)=>{
                        return(
                            <Card {...breed} noadopt = {noadopt} adopt ={adopt}></Card>
                        )
                    })
                }
            </div>
        </div>
    );
}