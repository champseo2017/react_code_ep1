import { useRef } from 'react'

const RefsArray = () => {

  const table = useRef()
  const tr = useRef([])
  const data = [
    {
      name: "Javascript1",
      price: '100'
    },
    {
      name: "Javascript2",
      price: '200'
    },
    {
      name: "Javascript3",
      price: '300'
    },
    {
      name: "Javascript4",
      price: '400'
    },
    {
      name: "Javascript5",
      price: '500'
    },
  ]

  const onClickButton = (i) => {
    // ตรวจสอบลำดับของแถวในการลบด้วย
    const index = tr.current[i].rowIndex
    table.current.deleteRow(index)
  }

  const onMouseOverRow = (i) => {
    tr.current[i].style.backgroundColor = 'yellow'
  }

  const onMouseOutRow = (i) => {
    tr.current[i].style.backgroundColor = 'white'
  }

  const tableStyles = {
    margin: 'auto',
    marginTop: 30
  }

  return (
    <table 
      ref={table} 
      border="1" 
      cellPadding={5}
      style={tableStyles}
    >
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      
      <tbody>
        {
          data.map((item, i) => {
            return <tr 
              key={i} 
              ref={el => tr.current[i] = el}
              onMouseOver={() => onMouseOverRow(i)}
              onMouseOut={() => onMouseOutRow(i)}
            >

              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => onClickButton(i)}>
                  Delete
                </button>
              </td>

            </tr>
          })
        }

      </tbody>
    </table>
  )
}

export default RefsArray