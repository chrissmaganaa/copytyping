"use client"

const previewLetter = "This is just a preview of the full experience. I will expand on this text later, I have some cheeky ideas for this. As I am typing this I realize how much fucking aura I have lmao. Nobody told me how much fucking aura I have. It may be intermalleniantly fucking maldeviant how much aura i have. i dont even have to say it. Enjoy the app. Get good at copywriting with this app. We should honestly stop calling it copywriting. Copytyping is the future. Why? Because you are already doing it! I am going to type a few more lines because I want to make sure that we have sufficient material to work with. I don't want to return to this text for a while. In the meantime, ill explain how much aura I have. Oh wait, I already did that."
const characters = previewLetter.split('')

const Preview = () => {
  return (
    <div className="w-full p-4 font-mono text-2xl">
      {characters.map((char, index) => (
        <span key={index} className="text-white/50">
          {char}
        </span>
      ))}
    </div>
  )
}

export default Preview