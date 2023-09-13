import { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";
const Home = () => {
  const [allActor, stateAllActor] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => stateAllActor(data));
  }, []);
  console.log(allActor);
  //Total cost salary + kora upai
  const [totalCost, stateTotalCost] = useState(0);
  //total taka theke - korle useState
  const [remaining, stateRemaining] = useState(0);

  //object ke array ar vitore rakhar jonne
  const [selectorActor, stateSelectorActor] = useState([]);

  const handleSelector = (actor) => {
    // akta name akbar chara asbenah
    const isExist = selectorActor.find((item) => item.id === actor.id);

    // salary + kora upai
    let count = actor.salary;
    if (isExist) {
      return alert("All Ready Selected");
    } else {
      //Total cost salary + kora upai
      selectorActor.forEach((item) => {
        count = count + item.salary;
        stateTotalCost(count);
      });
      //total taka theke - kora
      const totalRemaining = 20000 - count;

      //taka jodi shesh hoiya jai tokhon aitah hobe
      if (count > 20000) {
        return alert('Tumar taka sesh abar taka niya aso')
      } else {
        stateRemaining(totalRemaining);

        //
        stateSelectorActor([...selectorActor, actor]);
      }
    
    }
  };

  //   const handleSelector=(actor)=>{
  //     stateSelectorActor([...selectorActor, actor]);
  //   }

  return (
    <div className="flex justify-evenly">
      <div className="grid grid-cols-2 gap-5 mt-5 mb-5">
        {allActor.map((actor) => (
          <div
            key={actor.id}
            className=" w-[280px] h-[320px] border-gray-500 border rounded"
          >
            <div className="text-center text-white text-xl font-medium mt-2">
              <img
                className="w-[80px] rounded-full mx-auto"
                src={actor.image}
                alt=""
              />
              <h2>{actor.name}</h2>
              <p>
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, perspiciatis.
                </small>
              </p>
              <div className="flex justify-center gap-3">
                <p>Salary: {actor.salary} $</p>
                <p>{actor.role}</p>
              </div>
              <button
                onClick={() => handleSelector(actor)}
                className=" text-black rounded-lg mt-2 py-3 px-3 bg-[#00e6ff]"
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-white">
        <Cart
          selectorActor={selectorActor}
          totalCost={totalCost}
          remaining={remaining}
        ></Cart>

        {/* <div>
            {
            selectorActor.map(selected=> (
                <div key={selected.id}>
                    <h2>{selected.name}</h2>
                </div>
            ))
            }
        </div> */}
      </div>
    </div>
  );
};

export default Home;
