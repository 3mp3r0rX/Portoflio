const Spinner = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
    <svg
      className="animate-spin h-32 w-32"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="20" fill="yellow" />
      {[...Array(12)].map((_, index) => {
        const angle = (index * 30) * (Math.PI / 180);
        const x1 = 50 + Math.cos(angle) * 30;
        const y1 = 50 + Math.sin(angle) * 30;
        const x2 = 50 + Math.cos(angle) * 40;
        const y2 = 50 + Math.sin(angle) * 40;
        return <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} stroke="yellow" strokeWidth="4" />;
      })}
    </svg>
  </div>
  );
};

export default Spinner;
