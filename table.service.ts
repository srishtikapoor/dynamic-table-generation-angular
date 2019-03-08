import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }
  getData(){
    return[
      {
        "Fname":"Srishti", "Lname": "Kapoor", "ID":789,"EmailID": "k.srishti99@gmail.com","phone":'32332362',"DOB":"12-05-14",
      },
      {
        "Fname":"Suruchi", "Lname": "Aggarwal", "ID":129,"EmailID": "absn@gmail.com","phone":'32332362',"DOB":"12-05-14",
      },
      {
        "Fname":"Himani", "Lname": "Sanskar", "ID":889,"EmailID": "bcg@gmail.com","phone":'32332362',"DOB":"12-05-14",
      },
      {
        "Fname":"Srishti", "Lname": "Kapoor", "ID":789,"EmailID": "kiu@gmail.com","phone":'32332362',"DOB":"12-05-14",
      },
      {
        "Fname":"Suruchi", "Lname": "Aggarwal", "ID":129,"EmailID": "tyyu@gmail.com","phone":'32332362',"DOB":"12-05-14",
      },
      {
        "Fname":"Himani", "Lname": "Sanskar", "ID":889,"EmailID": "tyyu@gmail.com","phone":'32332362',"DOB":"12-05-14",
      },

    ];
  }
}
