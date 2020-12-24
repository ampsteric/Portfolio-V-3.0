import React from 'react'
import './tab.css'
export default function Tab() {
    return (
        <div>
            <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="#"><i style={{marginRight:10}} class="fa fa-address-book-o" aria-hidden="true"></i>

Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><i style={{marginRight:10}} class="fa fa-cube" aria-hidden="true"></i>
Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><i style={{marginRight:10}} class="fa fa-industry" aria-hidden="true"></i>
Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><i style={{marginRight:10}} class="fa fa-envelope-o" aria-hidden="true"></i>
Disabled</a>
  </li>
</ul>
        </div>
    )
}
