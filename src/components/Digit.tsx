import clsx from 'clsx'
import lettersArray from '../assets/letters'

interface Props {
  className?: string
  letter: string
}

interface SegmentsRowProps {
  segmentsArray: any[]
}

interface SegmentProps {
  on: boolean
}

export const Digit = ({ className, letter }: Props) => {
  return (
    <>
      <div className={clsx(className, 'flex flex-col gap-[0.5px]')}>
        {Object.keys(lettersArray).includes(letter) ? (
          <>
            <SegmentsRow segmentsArray={lettersArray[letter][0] || []} />
            <SegmentsRow segmentsArray={lettersArray[letter][1] || []} />
            <SegmentsRow segmentsArray={lettersArray[letter][2] || []} />
            <SegmentsRow segmentsArray={lettersArray[letter][3] || []} />
            <SegmentsRow segmentsArray={lettersArray[letter][4] || []} />
            <SegmentsRow segmentsArray={lettersArray[letter][5] || []} />
            <SegmentsRow segmentsArray={lettersArray[letter][6] || []} />
          </>
        ) : (
          <>
            <SegmentsRow segmentsArray={[]} />
            <SegmentsRow segmentsArray={[]} />
            <SegmentsRow segmentsArray={[]} />
            <SegmentsRow segmentsArray={[]} />
            <SegmentsRow segmentsArray={[]} />
            <SegmentsRow segmentsArray={[]} />
            <SegmentsRow segmentsArray={[]} />
          </>
        )}
      </div>
    </>
  )
}

export const SegmentsRow = ({ segmentsArray = [] }: SegmentsRowProps) => {
  return (
    <div className="flex gap-[0.5px]">
      <Segment on={segmentsArray.includes(1)} />
      <Segment on={segmentsArray.includes(2)} />
      <Segment on={segmentsArray.includes(3)} />
      <Segment on={segmentsArray.includes(4)} />
      <Segment on={segmentsArray.includes(5)} />
    </div>
  )
}

export const Segment = ({ on }: SegmentProps) => {
  return (
    <div className={clsx('w-2 h-2', on ? 'bg-white' : 'bg-gray-800')}></div>
  )
}
