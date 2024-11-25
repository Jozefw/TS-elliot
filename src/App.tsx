import GoalList from './components/GoalList.tsx';
import {useState} from 'react';
import goalsImage from './assets/goals.jpg';
import Header from './components/Header.tsx'

export interface Challenges {
  title:string;
  description:string;
  id:number
}

export default function App() {
  // const [challenge,setChallenge] = useState<Array<Challenges[]>>([]);
  const [challenge,setChallenge] = useState<Challenges[]>([]);

function HandleChallenge(){
  setChallenge(prevChallenge=>{
    const NewChallenge: Challenges = {
      id: Math.random(),
      title: "New Challenge",
      description: "New Challenge"
    };
    return [...prevChallenge,NewChallenge];
  })
}

function HandleDeleteChallenge(id:number){
  setChallenge(prevChallenge =>
    prevChallenge.filter((challengeItem)=>{
      challengeItem.id !== id
    })
  )
}

  return (
    <main>
      <Header image={{src:goalsImage,alt:"An image of challenges"}}>
        <h1>Your Challenges Schedule</h1>
      </Header>
        <button onClick={HandleChallenge}>Add Daily Challenge</button>
      <GoalList onDeleteChallenge={HandleDeleteChallenge} challengeList={challenge}></GoalList>
    </main>
  );
}
