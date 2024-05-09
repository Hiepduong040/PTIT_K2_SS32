
// import Jobs from './components/Jobs'

// export default function App() {
//   let objs = [
    
//     {
//       name:"code",
//       id:1,
//       status: false,
//     },

//     {
//       name:"cafe",
//       id:2,
//       status: false,
//     },

//     {
//       name:"bóng bàn",
//       id:3,
//       status: false,
//     }
//   ]
//   return (
//     <div>
//       <h2>Danh sách công việc</h2>
//       <input type="text" />
//       <button>Thêm</button>
//       <Jobs job={objs}></Jobs>
//     </div>
//   )
// }
import { useState } from 'react'
import './App.css'
import Jobs from './components/Jobs'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className='main'>
      <h2>Danh sách công việc</h2>
      <div>
        <input onChange={(e) => e.target.value} placeholder='Nhập tên công việc' className='input-name' type="text" />
        <button className='add-button'>Thêm</button>
      </div>
        <Jobs></Jobs>
      <div className='span doneJob'>Công việc đã hoàn thành: </div>
    </div>
    </>
  )
}

