
const Button = ({label, iconUrl}) => {
    return (
      <button className=" flex justify-center items-center gap-2 px-7 py-4 border font-monsterrat text-lg leading-none bg-blue-700 rounded-full text-white border-blue-700">
          {label}
  
          {/* <img 
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
          /> */}
      </button>
    )
  }
  
  export default Button