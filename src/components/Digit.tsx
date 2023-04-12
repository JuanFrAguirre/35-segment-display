import clsx from 'clsx'
import lettersArray from '../assets/letters'
import { useEffect, useState } from 'react'

interface Props {
  className?: string
  letter: string
  isEmpty?: boolean
}

interface SegmentsRowProps {
  segmentsArray: any[]
  flashing?: boolean
}

interface SegmentProps {
  on: boolean
  flashing?: boolean
}

export const Digit = ({ className, letter, isEmpty = false }: Props) => {
  const [flashing, setFlashing] = useState(isEmpty)

  useEffect(() => {
    const first = setInterval(() => {
      setFlashing((flashing) => !flashing)
    }, 500)

    return () => clearInterval(first)
  }, [])

  return (
    <>
      <div className={clsx(className, 'flex flex-col gap-[0.5px]')}>
        {isEmpty ? (
          <>
            <SegmentsRow segmentsArray={[]} />
            <SegmentsRow segmentsArray={[]} />
            <SegmentsRow segmentsArray={[]} />
            <SegmentsRow segmentsArray={[]} />
            <SegmentsRow segmentsArray={[]} />
            <SegmentsRow segmentsArray={[]} />
            <SegmentsRow segmentsArray={[1, 2, 3, 4, 5]} flashing={flashing} />
          </>
        ) : Object.keys(lettersArray).includes(letter) ? (
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

export const SegmentsRow = ({
  segmentsArray = [],
  flashing,
}: SegmentsRowProps) => {
  return (
    <div className="flex gap-[0.5px]">
      <Segment on={segmentsArray.includes(1)} flashing={flashing} />
      <Segment on={segmentsArray.includes(2)} flashing={flashing} />
      <Segment on={segmentsArray.includes(3)} flashing={flashing} />
      <Segment on={segmentsArray.includes(4)} flashing={flashing} />
      <Segment on={segmentsArray.includes(5)} flashing={flashing} />
    </div>
  )
}

export const Segment = ({ on, flashing }: SegmentProps) => {
  return (
    <div
      className={clsx('w-2 h-2', on && !flashing ? 'bg-white' : 'bg-gray-800')}
    ></div>
  )
}
