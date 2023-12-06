import Card from './Card';


export default function Breeds ({breeds, noadopt, adopt}){
    
    return (
      <div className="my-10">
        <div className="grid grid-cols-3 grid-rows-3 gap-3">
          {breeds.map((breed) => {
            return <Card {...breed} noadopt={noadopt} adopt={adopt}></Card>;
          })}
        </div>
      </div>
    );
}