
import './UserCount.css'

function UserCount(props) {
  return (
    <div className='text-center circle bg-info'>
        <h1 className='mt-2'>UserCount</h1>
        <h2 className='mb-2'>{props.userCount}</h2>
    </div>
  )
}
export default UserCount
