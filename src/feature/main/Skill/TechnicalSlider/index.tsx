import {TechnicalBlock} from "./TechnicalBlock"
import {technicalData} from "./technicalData"
import InfiniteSlider from "../../../../component/InfiniteSlider";

export const TechnicalSlider = () => {
    const items: React.ReactNode[] = technicalData.map((data) => {
        return (
            <TechnicalBlock
                imageUrl={data.imageUrl}
                caption={data.caption}
            />
        )
    });

    return (
        <InfiniteSlider speed={30} items={items}/>
    )
}