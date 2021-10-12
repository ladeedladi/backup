// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function createData(name,calories,fat,num){
  return {name,calories,fat,num}
  }
  
    const rows = [
      createData('Cupcake', 305, 3.7,1),
      createData('Donut', 452, 25.0,2),
      createData('Eclair', 262, 16.0,3),
      createData('Frozen yoghurt', 159, 6.0,4),
      createData('Gingerbread', 356, 16.0,5),
      createData('Honeycomb', 408, 3.2,6),
      createData('Ice cream sandwich', 237, 9.0,7),
      createData('Jelly Bean', 375, 0.0,1),
      createData('KitKat', 518, 26.0,2),
      createData('Lollipop', 392, 0.2,3),
      createData('Marshmallow', 318, 0,5),
      createData('Nougat', 360, 19.0,4),
      createData('Oreo', 437, 18.0,4),
    ]

export default function handler(req, res) {
  res.status(200).json({data:[...rows]})
}
