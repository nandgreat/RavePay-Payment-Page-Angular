import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public links = [];
  public user_name="";
  public currentUrl="";
  public menu_title = "MAIN NAVIGATION";

  constructor(private _auth: AuthService, private router: Router) {
    this.menu_title = "MAIN NAVIGATION";
    this.router.events.subscribe((evt: any) => this.currentUrl = evt.url);
  }
  ngOnInit() {
    this.user_name = this._auth.getUserInfo();
    this._auth.menu()
    .subscribe(
      res => {
      //  console.log(JSON.stringify(res.data));
        this.links = this.GenerateTree(res.data);
        console.log(this.links);
      },
      err => {console.log(err)

      }
    );
  }

  buildTree(tree, item)
  {
      if (item) { // if item then have parent
          for (var i=0; i<tree.length; i++) { // parses the entire tree in order to find the parent
              if (String(tree[i].id) === String(item.parent)) { // bingo!
                  tree[i].sublinks.push(item); // add the child to his parent
                  break;
              }
              else this.buildTree(tree[i].sublinks, item); // if item doesn't match but tree have sublinks then parses sublinks again to find item parent
          }
      }
      else { // if no item then is a root item, multiple root items are supported
          var idx = 0;
          while (idx < tree.length)
              if (tree[idx].parent && tree[idx].parent >0) this.buildTree(tree, tree.splice(idx, 1)[0]) // if have parent then remove it from the array to relocate it to the right place
              else idx++; // if doesn't have parent then is root and move it to the next object
      }
  }

  GenerateTree(data){
    for (var i=0; i<data.length; i++) { // add sublinks to every item
      data[i].sublinks = [];
    }
    this.buildTree(data,null);
    data.sort((a, b) => a.order_by - b.order_by);
    return data;
  }

}
