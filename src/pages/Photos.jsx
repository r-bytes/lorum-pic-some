import React from "react"
import {getClass} from "../utils"
import Image from "../components/Image"
import { useStateContext } from "../hooks/StateContext"

function Photos() {
    const {allPhotos} = useStateContext()
    const imageArr = allPhotos.map((img, index) => (
        <Image key={img.id} img={img} className={getClass(index)} />
    ))

    return (
        <main className="photos">
            {imageArr}
        </main>
    )
}

export default Photos