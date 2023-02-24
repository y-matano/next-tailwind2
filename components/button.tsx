const Button = ({ color, textColor, buttonName, func}) => {
  const colorVariants = {
    blue: 'bg-blue-600 hover:bg-blue-500',
    red: 'bg-red-600 hover:bg-red-500',
    white: 'bg-white-600 hover:bg-white-500',
    black: 'bg-black-600 hover:bg-black-500'
  }
  const textColorVariants = {
    blue: 'text-blue-500',
    red: 'text-red-500',
    white: 'text-white-500',
    black:'text-black-500'
  }
return (
<button className={`${colorVariants[color]} ${textColorVariants[textColor]} font-bold py-2 px-4 rounded inline-flex items-center`} onClick = {func}>
  {buttonName}
</button>
)
}
export default Button;

function Button0({ color, children }) {
  const colorVariants = {
    blue: 'bg-blue-600 hover:bg-blue-500',
    red: 'bg-red-600 hover:bg-red-500',
  }

  return (
    <button className={`${colorVariants[color]} ...`}>
      {children}
    </button>
  )
}