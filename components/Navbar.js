import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="textx-2xl font-medium absolute z-50">
            <ul className="flex gap-12">
                <Link href={"/"}>
                    <li className="pr-5">Home</li>
                </Link>
                <Link href={"/contact"}>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
}


// export default function Navbar() {
//     return (
//         <nav className="z-20 absolute">
//             <ul className="grid grid-cols-2 gap-1">
//                 <Link href={"/"}>
//                     <li>Home</li>
//                 </Link>
//                 <Link href={"/contact"}>
//                     <li>Contact</li>
//                 </Link>
//             </ul>
//         </nav>
//     );
// }