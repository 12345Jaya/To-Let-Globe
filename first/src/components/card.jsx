import book from '../assets/books.jpg'
const card = () => {
    return(
        <div class="w-1/4 m-5 p-5 bg-slate-950 rounded-xl flex-col items-center">
            <div><img src={book}/></div>
            <p class="text-white">Sun Sep 01 2024</p>
            <h2 class="text-xl font-bold text-sky-500">How to Build a positive relationship and have a good life....</h2>
            <p class="font-thin text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis vero culpa veniam earum atque quod repellat doloribus asperiores molestias labore quo, neque consectetur dolorum dignissimos, repudiandae inventore ipsam reprehenderit. Aliquid.</p>
        </div>
    )
}
export default card
