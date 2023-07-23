import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Carousel from './Carousel'

export default function BeforeAfterCarousel() {
  return (
    <Carousel className="w-full" items={
[
        <ReactCompareSlider className='w-max-'
          itemOne={<ReactCompareSliderImage src="trunk-before.jpg" alt="Before" />}
          itemTwo={<ReactCompareSliderImage src="trunk-after.jpg" alt="After" />}
        />
 ]
    } />
  );
}
