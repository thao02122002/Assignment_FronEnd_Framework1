import { Component, OnInit } from '@angular/core';
import { TypeLoginRequest } from 'src/app/types/Auth';
import {AuthService} from 'src/app/service/auth.service'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
users: TypeLoginRequest[]
  constructor(private userService: AuthService,
    private toastr: ToastrService) {
      this.users = []
     }

  ngOnInit(): void {
    this.onGetList()
  }
  onGetList(){
    this.userService.getUsers().subscribe((data) => {
      this.users = data
    })
  }

  // onUpdateRole(userId: string, newRole: number) {
  //   this.userService.updateUser(userId,{role: newRole}).subscribe(data => {
  //     this.onGetList()
  //   })
  // }

  onDelete(_id: string) {
    //confirm
    // kiểm tra dữ liệu
    //cập nhật lại danh sách
    const comfirmDelete = confirm('Bạn có chắc chăn smuoons xóa hay k')
    if(comfirmDelete && _id){
      this.userService.deleteUser(_id).subscribe((data) => {
        if(data) {
          this.toastr.success('Xóa sp thành công')
          this.onGetList()
        }
        
      })
    }
  }

}
