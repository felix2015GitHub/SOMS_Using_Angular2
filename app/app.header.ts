import { Component } from '@angular/core';

export class Header {
  project: name;
}

@Component({
  selector: 'my-header',
  template: `
    <div class="pos-f-t">
      <div class="collapse" id="navbar-header">
        <div class="container bg-inverse p-a-1">
          <h3>{{header.project}}</h3>
        </div>
      </div>
      <nav class="navbar navbar-light navbar-static-top" style="background-color: #e3f2fd;">
        <div class="container">
          <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
            &#9776;
          </button>
          <div class="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
            <a class="navbar-brand" href="#">{{header.project}}</a>
            <ul class="nav navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#members">會員管理</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#products">產品管理</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#orders">訂單管理</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    `
})


export class MyHeader {
  title = 'Tour of Heroes';
  header: Header = {
    project: '訂單管理系統'
  };
}
