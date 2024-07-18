import img from "../img/chess.jpeg";

export default function Landing() {
  return (
    <div className="flex justify-center">
      <div className="pt-8 max-w-screen-lg">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex justify-center">
            <img src={img} alt="Chess Image" className="max-w-96" />
          </div>

          <div className="pt-16">
            <div className="flex justify-center">
              <h1 className="text-4xl font-bold text-white">Chess khelo!!</h1>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="px-8 py-4 text-2xl bg-green-500 hover:bg-green-700 text-white font-bold rounded">
                Play Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
