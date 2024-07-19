import ChessBoard from "../components/ChessBoard";
export default function Game() {
  return (
    <div className="justify-center flex">
      <div className="pt-8 max-w-screen-lg">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="grid-cols-span-4 bg-red-200">
            <ChessBoard />
          </div>
          <div>
            <button>Play</button>
          </div>
        </div>
      </div>
    </div>
  );
}
