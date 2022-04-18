import { createGlobalStyle } from "styled-components";

const GlobalTheme = createGlobalStyle`
main {
    background-color: ${({ theme }) => theme.bodyColor};
  }
  body{
    color: ${({ theme }) => theme.textColor}
  }
 
  // strong{
  //   color: rgba(${({ theme }) => theme.contentColor},1)  ;
    
  }
  /* ------------------------------------------ title ------------------------------------------ */
  .modal-dialog.modal-notify .modal-body {
    color: rgba(${({ theme }) => theme.contentColor},1)
  }
  .content{
    color: rgba(${({ theme }) => theme.contentColor},1)
  }
  /* ------------------------------------------ navbar ------------------------------------------ */

  .navbar {
    background-color: ${({ theme }) => theme.navbarBgColor};
    color: ${({ theme }) => theme.navbarTextColor};
  }
  .side-nav .collapsible a.active{
    color: hsl(${(props) => props.light});
  }
  /* ------------------------------------------ modal content ------------------------------------------ */
  .primary-color .modal-header {
    background-color: rgba( ${(props) => props.primary}, 1);
  }
  .modal-content .btn-outline-dark {
    color: ${({ theme }) => theme.linkColor} !important;
    border: 2px solid ${({ theme }) => theme.linkColor} !important;
  }
   .modal-content {
    background-color: ${({ theme }) => theme.cardColor};
  }
  .modal-dialog.cascading-modal .modal-body{
    color: ${({ theme }) => theme.tableText} !important
  }

  /* ------------------------------------------ side nav ------------------------------------------ */
  .side-nav {
    background-color: ${({ theme }) => theme.sidenavBgColor};
  }
  .side-nav .collapsible > li a {
    color: ${({ theme }) => theme.sidenavItemColor};
  }
  .side-nav .collapsible > li a.collapsible-header:not(.active):hover {
    color: ${({ theme }) => theme.sidenavItemColor};
  }
  .side-nav .collapsible > li a.collapsible-header.active {
    background-color: rgba(${(props) => props.primary}, 0.9);
    color: #fff;
  }
  .side-nav .collapsible > li a.collapsible-header.active:hover {
    background-color: rgba(${(props) => props.primary}, 0.9);
    color: #fff;
  }
  /* subitems */
  .side-nav .collapsible-body a {
    background-color: rgba(${(props) => props.primary}, 0.05);
  }
  .light .side-nav .collapsible-body a.active {
    color: hsl(${(props) => props.dark});
  }
  .dark .side-nav .collapsible-body a.active {
    color: hsl(${(props) => props.light});
  }
  .light .side-nav .collapsible li a:hover {
    background-color: hsl(${(props) => props.dark}, 0.1);
  }
  .dark .side-nav .collapsible li a:hover {
    background-color: hsl(${(props) => props.light}, 0.1);
  }
  /* ------------------------------------------ search nav ------------------------------------------ */
  .search-nav:focus {
    border-color: hsl(${(props) => props.light}, 1);
  }
  .search-nav-result a:hover {
    color: hsl(${(props) => props.dark}) !important;
  }
  .light .MuiInputBase-root {
    color: #333 !important;
  }
  .dark .MuiInputBase-root {
    color: #fff !important;
  }
  /* ------------------------------------------ checkboxes ------------------------------------------ */
  .form-check-input[type="checkbox"]:checked + label:not(.disabled)::before,
  label.btn input[type="checkbox"]:checked + label:not(.disabled)::before {
    border-right-color: hsl(${(props) => props.light});
    border-bottom-color: hsl(${(props) => props.light});
  }
  /* ------------------------------------------ form control ------------------------------------------ */
  .dark .form-control {
    color: #eee;
  }
  .light .form-control:focus {
    color: #444;
  }
  .dark .form-control:focus {
    color: #fff;
  }
  .md-form input:not([type]):focus:not([readonly]),
  .md-form input[type="text"]:not(.browser-default):focus:not([readonly]),
  .md-form input[type="password"]:not(.browser-default):focus:not([readonly]),
  .md-form input[type="email"]:not(.browser-default):focus:not([readonly]),
  .md-form input[type="url"]:not(.browser-default):focus:not([readonly]),
  .md-form input[type="time"]:not(.browser-default):focus:not([readonly]),
  .md-form input[type="date"]:not(.browser-default):focus:not([readonly]),
  .md-form input[type="datetime"]:not(.browser-default):focus:not([readonly]),
  .md-form
  input[type="datetime-local"]:not(.browser-default):focus:not([readonly]),
  .md-form input[type="tel"]:not(.browser-default):focus:not([readonly]),
  .md-form input[type="number"]:not(.browser-default):focus:not([readonly]),
  .md-form input[type="search"]:not(.browser-default):focus:not([readonly]),
  .md-form input[type="search-md"]:focus:not([readonly]),
  .md-form textarea.md-textarea:focus:not([readonly]) {
    border-bottom: 1px solid hsl(${(props) => props.dark});
    box-shadow: 0 1px 0 0 rgba(${(props) => props.primary}, 1);
    color: 0 1px 0 0color: rgba(${({ theme }) => theme.contentColor},1);
  }
  .md-form input:not([type]):focus:not([readonly]) + label,
  .md-form input[type="text"]:not(.browser-default):focus:not([readonly]) + label,
  .md-form
  input[type="password"]:not(.browser-default):focus:not([readonly])
  + label,
  .md-form
  input[type="email"]:not(.browser-default):focus:not([readonly])
  + label,
  .md-form input[type="url"]:not(.browser-default):focus:not([readonly]) + label,
  .md-form input[type="time"]:not(.browser-default):focus:not([readonly]) + label,
  .md-form input[type="date"]:not(.browser-default):focus:not([readonly]) + label,
  .md-form
  input[type="datetime"]:not(.browser-default):focus:not([readonly])
  + label,
  .md-form
    input[type="datetime-local"]:not(.browser-default):focus:not([readonly])
    + label,
    .md-form input[type="tel"]:not(.browser-default):focus:not([readonly]) + label,
  .md-form
  input[type="number"]:not(.browser-default):focus:not([readonly])
  + label,
  .md-form
    input[type="search"]:not(.browser-default):focus:not([readonly])
    + label,
  .md-form input[type="search-md"]:focus:not([readonly]) + label,
  .md-form textarea.md-textarea:focus:not([readonly]) + label {
    color: rgba(${({ theme }) => theme.textColor}), 1);
  }
  
  .md-form input:not([type]):focus:not([readonly]) + label,
  .md-form input[type="text"]:not(.browser-default):focus:not([readonly]) + label,
  .md-form
  input[type="password"]:not(.browser-default):focus:not([readonly])
  + label,
  .md-form
  input[type="email"]:not(.browser-default):focus:not([readonly])
  + label,
  .md-form input[type="url"]:not(.browser-default):focus:not([readonly]) + label,
  .md-form input[type="time"]:not(.browser-default):focus:not([readonly]) + label,
  .md-form input[type="date"]:not(.browser-default):focus:not([readonly]) + label,
  .md-form
  input[type="datetime"]:not(.browser-default):focus:not([readonly])
  + label,
  .md-form
  input[type="datetime-local"]:not(.browser-default):focus:not([readonly])
  + label,
  .md-form input[type="tel"]:not(.browser-default):focus:not([readonly]) + label,
  .md-form
  input[type="number"]:not(.browser-default):focus:not([readonly])
  + label,
  .md-form
  input[type="search"]:not(.browser-default):focus:not([readonly])
  + label,
  .md-form input[type="search-md"]:focus:not([readonly]) + label,
  .md-form textarea.md-textarea:focus:not([readonly]) + label {
    color: rgba(${({ theme }) => theme.contentColor},1);
  }
  .md-form label {
    color:  ${({ theme }) => theme.placeHolder} !important;
  }
  
  /* ------------------------------------------ dropdowns ------------------------------------------ */
  .dropdown-content li:not(.disabled) > span {
    color: rgba(var(--dark-color), 1);
  }
  .text-primary {
    color: hsl(${(props) => props.light}) !important;
  }
  .dropdown .dropdown-menu .dropdown-item:hover,
  .dropdown-content li:hover,
  .dropdown-content li:not(.disabled):hover span,
  .dropdown-content li.active > span {
    background-color: rgba(${(props) => props.primary}, 1);
    color: rgba(${({ theme }) => theme.hoverDropdown},1);
  }
  .select-dropdown{
    color: rgba(${({ theme }) => theme.contentColor},1);
  }
  /* ------------------------------------------ Time picker ------------------------------------------ */
  .MuiInput-underline:after{
      border-bottom: 2px solid rgba(${(props) => props.primary}, 1) !important;
    }
    .MuiInputBase-root{
      color: hsl(${(props) => props.light}) !important;
    }
    .md-form input:not([type]), 
    .md-form input[type="text"]:not(.browser-default), 
    .md-form input[type="password"]:not(.browser-default), 
    .md-form input[type="email"]:not(.browser-default), 
    .md-form input[type="url"]:not(.browser-default), 
    .md-form input[type="time"]:not(.browser-default), 
    .md-form input[type="date"]:not(.browser-default), 
    .md-form input[type="datetime"]:not(.browser-default), 
    .md-form input[type="datetime-local"]:not(.browser-default), 
    .md-form input[type="tel"]:not(.browser-default), 
    .md-form input[type="number"]:not(.browser-default), 
    .md-form input[type="search"]:not(.browser-default), 
    .md-form input[type="search-md"], .md-form textarea.md-textarea{
      background-color: transparent !important;
      color: rgba(${({ theme }) => theme.contentColor},1) ;
    }
    /* ------------------------------------------ user-guide ------------------------------------------ */

    .user-guide{
      background-color: ${({ theme }) => theme.userguidColor};
      color: ${({ theme }) => theme.inputColor};
    }

  /* ------------------------------------------ user drop down ------------------------------------------ */
  .user-dropdown-color {
    background-color: hsl(${(props) => props.dark});
  }
  .dropdownItem:hover {
    color: rgba(${(props) => props.primary}, 1) !important;
  }
  .selectedlayout {
    border: 2px solid hsl(${(props) => props.dark});
  }
  .selected-background-image {
    border: 2px solid hsl(${(props) => props.dark});
    border-radius: 4px;
  }
  
  /* ------------------------------------------ card ------------------------------------------ */
  .card {
    background-color: ${({ theme }) => theme.cardColor};
  }
  /* ------------------------------------------ link ------------------------------------------ */
  a {
    color: ${({ theme }) => theme.linkcolor};
  }
  
  /* ------------------------------------------ text ------------------------------------------ */
  .primary-text {
    color: hsl(${(props) => props.dark}) !important;
  }
  /* ------------------------------------------ colors ------------------------------------------ */
  .dynamic-text-color {
    color: rgba(${({ theme }) => theme.contentColor}, 1) !important;
  }
  .primary-color {
    background-color: rgba(${(props) => props.primary}, 1) !important;
    color: ${({ theme }) => theme.textColor} !important;
  }
  .primary-light {
    background-color: hsl(${(props) => props.light}) !important;
    /* color: rgba(${({ theme }) => theme.textColor}, 1) !important; */
  }
  .primary-dark {
    background-color: hsl(${(props) => props.dark}) !important;
    /* color: rgba(${({ theme }) => theme.textColor}, 1) !important; */
  }
  /* ------------------------------------------ theme high light ------------------------------------------ */
  
  .theme-highLight {
    background-color: rgba(${(props) => props.primary}, 1);
  }
  /* ------------------------------------------ buttons ------------------------------------------ */
  .secondary-button {
    background-color: rgba(${({ theme }) =>
    theme.secondaryButton}, 1) !important;
    color: #ffffff !important;
  }
  .tertiary-button {
    background-color: rgba(${({ theme }) =>
    theme.tertiaryButton}, 1) !important;
    color: #ffffff !important;
  }
  
  /* ------------------------------------------ gradiants ------------------------------------------ */
  .custom-gradiant-1 {
    background: ${({ theme }) => theme.gradiant1};
  }
  .custom-gradiant-1 {
    background: ${({ theme }) => theme.gradiant1});
  }
  .custom-gradiant-1 {
    background: ${({ theme }) => theme.gradiant1};
  }
  .custom-gradiant-1 {
    background: ${({ theme }) => theme.gradiant1};
  }
  /* ------------------------------------------ progress bar ------------------------------------------ */
  
  .custom-progress-color {
    background-color: rgba(${(props) => props.primary}, 1) !important;
  }
  /* ------------------------------------------ list item iscsi ------------------------------------------ */
  
  .list-group-item {
    border: 0;
    margin-bottom: 1px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
  }
  .list-group-item:hover {
    color: rgba(${(props) => props.primary}, 1) !important;
  }
  .list-group-item:last-child {
    border-bottom: none;
  }
  /* ------------------------------------------ hardware status component items ------------------------------------------ */
  
  .system-component-items li {
    /* margin: .5rem 0; */
    cursor: pointer;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.5rem 2rem;
    font-weight: 300;
    font-size: 0.9rem;
  }
  .system-component-items li:first-child {
    border-top: none;
  }
  .system-component-items li:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.05);
  }
  .system-component-items li:hover {
    color: rgba(${(props) => props.primary}, 1) !important;
  }
  .system-component-items li.active {
    color: rgba(${(props) => props.primary}, 1) !important;
  }
    /* ------------------------------------------ pool chart ----------------------------------------------- */

    .chart-text-color {
      color: ${({ theme }) => theme.inputColor};
    }
    /* ------------------------------------------ color picker ----------------------------------------------- */
    .colorPickerPopover {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding:20px ;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.cardColor};
      z-index: 2;
    } 
  .addcolorbutton {
    border: 1px dashed rgba(${(props) => props.primary}, 1);
    box-sizing: content-box;
    background-color:transparent;
    margin: 0.2rem;
  }
.fa-plus:before {
  color: hsl(${(props) => props.light})
}
  .teal.lighten-5 {
    background-color: ${({ theme }) => theme.poolchartBackground} !important;
  }
  .chart-text-color {
    color: ${({ theme }) => theme.inputColor};
  }
  .addcolor {
    color:rgba(${(props) => props.primary}, 1);
    margin-top: 0;
  }
  `
  ;


export default GlobalTheme;
