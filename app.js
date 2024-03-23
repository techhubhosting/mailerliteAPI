const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    res.sendFile(__dirname + "/signup.html");
});


app.post("/", function(req, res){

    var fullName = req.body.name;
    var email = req.body.email;

    var data ={
        email: email,
        fields: {
            name: fullName,
          }
    };

    var options = {
        url: "https://connect.mailerlite.com/api/subscribers",
        method: "POST",
        headers: {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMDI3ZWZlYmY0N2U5NTQ4NjM3MTJjYzVhZDk1MmNkZGI3NTA3YjI3ZWI5YzcwZjJhMTI0YWVhMTRkNGM4NjM1MTRkZDMyNmMyNzg2MTkzNmMiLCJpYXQiOjE3MTExODIxMjAuNzIxNDcxLCJuYmYiOjE3MTExODIxMjAuNzIxNDczLCJleHAiOjQ4NjY4NTU3MjAuNzE3ODI1LCJzdWIiOiI4OTE5NjAiLCJzY29wZXMiOltdfQ.G2QN8Zfh4Gi86eGL8gh9eaHQsnewacLaJBvJ_0islByiFgGatLbVR05-bpMd2CiFIWc_EQL9JRt_h454dBORanNZ1QOf9qYBNSW2jf02sx3dZ8kTD5SLi8xM4OoeK6yS3xFoaaM9gD9mY5224vTvElpOai7EmLdfbci0A4zZIQOR5fQnwNv8JcPhLsLBlzLOpJbwC983xAP402b50dp_UgaKnqibmy5hoEc812DtisHy3O5G9WgwMQHbVeauvaHBAw2wMDOPNdGAaPFqoUJzvfcpKW3Teww_Gmv-s9pbBbOPQbjQCr4KVp-yxlZidk_u19GUYaDw_y-KSxNeFSQhSivGKT5-1VVYfgGLrBhLuxgoK4DWD3KC95rsr6h2c1pJEmECSrHIV2-NZ55xyp23i5XZfrhciE8at0-tqZUXFqfZVB9hlhdazfWPc7twMOQDEdujvT0K7E3FoFDZ5bG4DtXxsWq4xIkvVLpINhQgAA6iku2-uPNF4K5g3_J117tA_gFF5T-iT_zxxT7BtkcG0yK4BirJa0boxd4MQhu7-XFu7riprsxtdG1Xpd-hoXicLJLWpnSeXOdb6K_MbFi7DHESKf_jhULIekApj6KdnlE-_kFOA-_e4lrzvDFLC0B9B-OFyAlbCk4mD6zJDnE9S20snePybKhaL1K5kgbj7xQ" 
        },
        json: data
    }
    request(options, function(error, response, body){
if(error){
    res.sendFile(__dirname + "/signup.html")
} else {
    if(response.statusCode === 200){
        res.sendFile("https://geniusclub.io")
    } else{
        res.sendFile(__dirname + "/signup.html")
    }
}

    });


});

app.listen(process.env.PORTV || 3000, function(){
console.log("Server is running a marathan on port 3K right now as we speak");
});


//Key : eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMDI3ZWZlYmY0N2U5NTQ4NjM3MTJjYzVhZDk1MmNkZGI3NTA3YjI3ZWI5YzcwZjJhMTI0YWVhMTRkNGM4NjM1MTRkZDMyNmMyNzg2MTkzNmMiLCJpYXQiOjE3MTExODIxMjAuNzIxNDcxLCJuYmYiOjE3MTExODIxMjAuNzIxNDczLCJleHAiOjQ4NjY4NTU3MjAuNzE3ODI1LCJzdWIiOiI4OTE5NjAiLCJzY29wZXMiOltdfQ.G2QN8Zfh4Gi86eGL8gh9eaHQsnewacLaJBvJ_0islByiFgGatLbVR05-bpMd2CiFIWc_EQL9JRt_h454dBORanNZ1QOf9qYBNSW2jf02sx3dZ8kTD5SLi8xM4OoeK6yS3xFoaaM9gD9mY5224vTvElpOai7EmLdfbci0A4zZIQOR5fQnwNv8JcPhLsLBlzLOpJbwC983xAP402b50dp_UgaKnqibmy5hoEc812DtisHy3O5G9WgwMQHbVeauvaHBAw2wMDOPNdGAaPFqoUJzvfcpKW3Teww_Gmv-s9pbBbOPQbjQCr4KVp-yxlZidk_u19GUYaDw_y-KSxNeFSQhSivGKT5-1VVYfgGLrBhLuxgoK4DWD3KC95rsr6h2c1pJEmECSrHIV2-NZ55xyp23i5XZfrhciE8at0-tqZUXFqfZVB9hlhdazfWPc7twMOQDEdujvT0K7E3FoFDZ5bG4DtXxsWq4xIkvVLpINhQgAA6iku2-uPNF4K5g3_J117tA_gFF5T-iT_zxxT7BtkcG0yK4BirJa0boxd4MQhu7-XFu7riprsxtdG1Xpd-hoXicLJLWpnSeXOdb6K_MbFi7DHESKf_jhULIekApj6KdnlE-_kFOA-_e4lrzvDFLC0B9B-OFyAlbCk4mD6zJDnE9S20snePybKhaL1K5kgbj7xQ