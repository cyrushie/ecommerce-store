import { Billboard as BillboardTypes } from "@/types";

interface BillboardProps {
  data: BillboardTypes;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl reltative overflow-hidden ">
      <div
        className="aspect-[1.5/1] sm:aspect-[2.1/1] overflow-hidden rounded-xl bg-center bg-cover"
        style={{
          backgroundImage: ` linear-gradient(
          to top, 
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.3) 
          ), url(${data?.imageUrl})`,
        }}
      >
        <div className="flex justify-center items-center h-full w-full ">
          <div className="text-3xl sm:text-5xl lg:text-6xl  sm:max-w-xl max-w-xs font-bold text-white">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
