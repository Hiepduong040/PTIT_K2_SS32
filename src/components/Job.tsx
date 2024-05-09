
interface Props{
  job: Job
}
interface Job{
    id: string,
    name: string,
    status: boolean
}
export default function Job(props: Props) {
  const {job} = props;
  return (
    <>
      <span className='span'><div className='left-side'><input type="checkbox"/> code</div><div className="right-side"><button className='edit'>edit</button> <button className='delete'>delete</button></div></span>
    </>
  )
}