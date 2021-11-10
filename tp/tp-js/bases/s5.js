var objPers = { 
   nom : "defrance" ,
   prenom : "didier"  , 
   adresse : {
       num : 12 ,
       rue : "rue xyz" ,
       codePostal : 27000 , 
       ville : "Evreux" 
   }
}
var objPersAsJsonString = JSON.stringify(objPers)
//affichage console:
console.log("objPersAsJsonString="+objPersAsJsonString)
//reconstruire un autre objet javascript 
//qui aura les memes valeurs de objPers et que objPersAsJsonString
//via JSON.parse()
var objPers2 = JSON.parse(objPersAsJsonString)
//afficher la sous partie codePostal de objPers2
//pour vérifier que la copie objPers2 est correcte
console.log("codePostal de objPers2="+objPers2.adresse.codePostal)
console.log("prenom de objPers2="+objPers2["prenom"])
