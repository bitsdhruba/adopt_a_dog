import Card from './Card';


export default function Breeds ({breeds, noadopt, adopt}){
    
    return (
      <div className="my-10">
        <div className="flex flex-wrap grid-col justify-center gap-3 m-3">
          {breeds.map((breed) => {
            return <Card {...breed} noadopt={noadopt} adopt={adopt}></Card>;
          })}
        </div>
      </div>
    );
}