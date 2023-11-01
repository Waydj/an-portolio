export const Introduction = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="h-[120px] border-r-[1px] mt-[-20px]"></div>
      <div className="w-[5px] h-[5px] bg-green-500 rounded-full"></div>
      <h2 className="mt-5 text-white font-medium text-[13px] tracking-widest uppercase">
        Hello! My name is
      </h2>
      <h2 className="text-[70px] font-bold text-white tracking-widest mt-5">
        Alexey <br />
        Waydj
      </h2>
      <img
        src="/avatar.jpg"
        alt="avatar"
        className="w-[160px] h-[160px] bg-gray-300 p-5 rounded-full mt-7"
      />
    </div>
  );
};
