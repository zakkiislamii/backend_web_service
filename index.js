const express = require("express")
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const db = require("./connec")
const respon =require("./respon")

//routes/URL utama kita method GET
app.use(bodyParser.json())

app.get("/mall", (req,res)=>{ 
  const sql = "SELECT * FROM daftar_member_mall"
  db.query(sql,(error,fields)=>{
    if (error) throw error
    respon(200,fields,"New Member get list",res)
  })  
})

app.get("/mall/:kodeMember", (req,res)=>{
  const kodeMember = req.params.kodeMember
  const sql = `SELECT * FROM daftar_member_mall WHERE kodeMember = ${kodeMember}`
  db.query(sql,(error,fields)=>{
    if (error) throw error
    respon(200,fields,"get Member",res)   
  }) 
})

app.post("/mall/menambahData", (req,res)=>{
  const {namaLengkapMember,kodeMember,tokoBaju_fav,alamat}=req.body
  const sql = `INSERT INTO daftar_member_mall(namaLengkapMember,kodeMember,tokoBaju_fav,alamat) values ('${namaLengkapMember}',${kodeMember},'${tokoBaju_fav}','${alamat}')`
  db.query(sql,(error,fields)=>{
    if (error) respon(500,"invalid","ERROR",res)
    if(fields?.affectedRows){
      const data={
        isSuccess: fields.affectedRows,
        id:fields.insertId,
      }
      respon(200,data,"Data Member Baru berhasil ditambahkan",res)
    }else{
      console.log("data tidak masuk")
    }
  })
})

app.put("/mall/ubahData", (req,res)=>{
const {namaLengkapMember,kodeMember,tokoBaju_fav,alamat}=req.body
const sql = `UPDATE daftar_member_mall SET namaLengkapMember = '${namaLengkapMember}', tokoBaju_fav = '${tokoBaju_fav}',alamat='${alamat}' WHERE kodeMember = ${kodeMember}`
db.query(sql,(error,fields)=>{
  if (error) respon(500,"invalid","ERROR",res)
  if(fields?.affectedRows){
    const data={
      isSuccess: fields.affectedRows,
      message: fields.message
    }
    respon(200,data,"Data Member Baru berhasil diubah",res)    
  }else{
    respon(500,"Data tidak valid","mungkin anda salah input",res) 
  }
})
})

app.delete("/mall/hapusData", (req,res)=>{
  const {kodeMember} = req.body
  const sql = `DELETE FROM daftar_member_mall WHERE kodeMember = ${kodeMember}`
  db.query(sql,(error,fields)=>{
    if (error) respon(500,"invalid","ERROR",res)
    if(fields?.affectedRows){
      const data={
        isDeleted: fields.affectedRows,     
      }
    respon(200,data,"Data Member Baru berhasil dihapus",res)
    }else{
      respon(500,"Data tidak ditemukan","mungkin anda salah input atau data sudah dihapus",res) 
    }
  })  
})  

app.listen(port, ()=>{
  console.log(`Example app listening on port ${port}`)
})