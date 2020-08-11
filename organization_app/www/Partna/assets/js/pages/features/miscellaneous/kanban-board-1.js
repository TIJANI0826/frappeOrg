"use strict";var KTKanbanBoardDemo={init:function(){var s;new jKanban({element:"#kt_kanban_1",gutter:"0",widthBoard:"250px",boards:[{id:"_inprocess",title:"In Process",item:[{title:'<span class="font-weight-bold">You can drag me too</span>'},{title:'<span class="font-weight-bold">Buy Milk</span>'}]},{id:"_working",title:"Working",item:[{title:'<span class="font-weight-bold">Do Something!</span>'},{title:'<span class="font-weight-bold">Run?</span>'}]},{id:"_done",title:"Done",item:[{title:'<span class="font-weight-bold">All right</span>'},{title:'<span class="font-weight-bold">Ok!</span>'}]}]}),new jKanban({element:"#kt_kanban_2",gutter:"0",widthBoard:"250px",boards:[{id:"_inprocess",title:"In Process",class:"primary",item:[{title:'<span class="font-weight-bold">You can drag me too</span>',class:"light-primary"},{title:'<span class="font-weight-bold">Buy Milk</span>',class:"light-primary"}]},{id:"_working",title:"Working",class:"success",item:[{title:'<span class="font-weight-bold">Do Something!</span>',class:"light-success"},{title:'<span class="font-weight-bold">Run?</span>',class:"light-success"}]},{id:"_done",title:"Done",class:"danger",item:[{title:'<span class="font-weight-bold">All right</span>',class:"light-danger"},{title:'<span class="font-weight-bold">Ok!</span>',class:"light-danger"}]}]}),new jKanban({element:"#kt_kanban_3",gutter:"0",widthBoard:"250px",click:function(s){alert(s.innerHTML)},boards:[{id:"_todo",title:"To Do",class:"light-primary",dragTo:["_working"],item:[{title:"My Task Test",class:"primary"},{title:"Buy Milk",class:"primary"}]},{id:"_working",title:"Working",class:"light-warning",item:[{title:"Do Something!",class:"warning"},{title:"Run?",class:"warning"}]},{id:"_done",title:"Done",class:"light-success",dragTo:["_working"],item:[{title:"All right",class:"success"},{title:"Ok!",class:"success"}]},{id:"_notes",title:"Notes",class:"light-danger",item:[{title:"Warning Task",class:"danger"},{title:"Do not enter",class:"danger"}]}]}),s=new jKanban({element:"#kt_kanban_4",gutter:"0",click:function(s){alert(s.innerHTML)},boards:[{id:"_backlog",title:"Backlog",class:"light-dark",item:[{title:'\n                                <div class="d-flex align-items-center">\n                        \t        <div class="symbol symbol-success mr-3">\n                        \t            <img alt="Pic" src="assets/media/users/300_24.jpg" />\n                        \t        </div>\n                        \t        <div class="d-flex flex-column align-items-start">\n                        \t            <span class="text-dark-50 font-weight-bold mb-1">SEO Optimization</span>\n                        \t            <span class="label label-inline label-light-success font-weight-bold">In progress</span>\n                        \t        </div>\n                        \t    </div>\n                            '},{title:'\n                                <div class="d-flex align-items-center">\n                        \t        <div class="symbol symbol-success mr-3">\n                        \t            <span class="symbol-label font-size-h4">A.D</span>\n                        \t        </div>\n                        \t        <div class="d-flex flex-column align-items-start">\n                        \t            <span class="text-dark-50 font-weight-bold mb-1">Finance</span>\n                        \t            <span class="label label-inline label-light-danger font-weight-bold">Pending</span>\n                        \t        </div>\n                        \t    </div>\n                            '}]},{id:"_todo",title:"To Do",class:"light-danger",item:[{title:'\n                                <div class="d-flex align-items-center">\n                        \t        <div class="symbol symbol-success mr-3">\n                        \t            <img alt="Pic" src="assets/media/users/300_16.jpg" />\n                        \t        </div>\n                        \t        <div class="d-flex flex-column align-items-start">\n                        \t            <span class="text-dark-50 font-weight-bold mb-1">Server Setup</span>\n                        \t            <span class="label label-inline label-light-dark font-weight-bold">Completed</span>\n                        \t        </div>\n                        \t    </div>\n                            '},{title:'\n                                <div class="d-flex align-items-center">\n                        \t        <div class="symbol symbol-success mr-3">\n                        \t            <img alt="Pic" src="assets/media/users/300_15.jpg" />\n                        \t        </div>\n                        \t        <div class="d-flex flex-column align-items-start">\n                        \t            <span class="text-dark-50 font-weight-bold mb-1">Report Generation</span>\n                        \t            <span class="label label-inline label-light-warning font-weight-bold">Due</span>\n                        \t        </div>\n                        \t    </div>\n                            '}]},{id:"_working",title:"Working",class:"light-primary",item:[{title:'\n                                <div class="d-flex align-items-center">\n                        \t        <div class="symbol symbol-success mr-3">\n                            \t         <img alt="Pic" src="assets/media/users/300_24.jpg" />\n                        \t        </div>\n                        \t        <div class="d-flex flex-column align-items-start">\n                        \t            <span class="text-dark-50 font-weight-bold mb-1">Marketing</span>\n                        \t            <span class="label label-inline label-light-danger font-weight-bold">Planning</span>\n                        \t        </div>\n                        \t    </div>\n                            '},{title:'\n                                <div class="d-flex align-items-center">\n                        \t        <div class="symbol symbol-light-info mr-3">\n                        \t            <span class="symbol-label font-size-h4">A.P</span>\n                        \t        </div>\n                        \t        <div class="d-flex flex-column align-items-start">\n                        \t            <span class="text-dark-50 font-weight-bold mb-1">Finance</span>\n                        \t            <span class="label label-inline label-light-primary font-weight-bold">Done</span>\n                        \t        </div>\n                        \t    </div>\n                            '}]},{id:"_done",title:"Done",class:"light-success",item:[{title:'\n                                <div class="d-flex align-items-center">\n                        \t        <div class="symbol symbol-success mr-3">\n                        \t            <img alt="Pic" src="assets/media/users/300_11.jpg" />\n                        \t        </div>\n                        \t        <div class="d-flex flex-column align-items-start">\n                        \t            <span class="text-dark-50 font-weight-bold mb-1">SEO Optimization</span>\n                        \t            <span class="label label-inline label-light-success font-weight-bold">In progress</span>\n                        \t        </div>\n                        \t    </div>\n                            '},{title:'\n                                <div class="d-flex align-items-center">\n                        \t        <div class="symbol symbol-success mr-3">\n                        \t            <img alt="Pic" src="assets/media/users/300_20.jpg" />\n                        \t        </div>\n                        \t        <div class="d-flex flex-column align-items-start">\n                        \t            <span class="text-dark-50 font-weight-bold mb-1">Product Team</span>\n                        \t            <span class="label label-inline label-light-danger font-weight-bold">In progress</span>\n                        \t        </div>\n                        \t    </div>\n                            '}]},{id:"_deploy",title:"Deploy",class:"light-primary",item:[{title:'\n                                <div class="d-flex align-items-center">\n                        \t        <div class="symbol symbol-light-warning mr-3">\n                        \t            <span class="symbol-label font-size-h4">D.L</span>\n                        \t        </div>\n                        \t        <div class="d-flex flex-column align-items-start">\n                        \t            <span class="text-dark-50 font-weight-bold mb-1">SEO Optimization</span>\n                        \t            <span class="label label-inline label-light-success font-weight-bold">In progress</span>\n                        \t        </div>\n                        \t    </div>\n                            '},{title:'\n                                <div class="d-flex align-items-center">\n                        \t        <div class="symbol symbol-light-danger mr-3">\n                        \t            <span class="symbol-label font-size-h4">E.K</span>\n                        \t        </div>\n                        \t        <div class="d-flex flex-column align-items-start">\n                        \t            <span class="text-dark-50 font-weight-bold mb-1">Requirement Study</span>\n                        \t            <span class="label label-inline label-light-warning font-weight-bold">Scheduled</span>\n                        \t        </div>\n                        \t    </div>\n                            '}]}]}),document.getElementById("addToDo").addEventListener("click",function(){s.addElement("_todo",{title:'\n                        <div class="d-flex align-items-center">\n                            <div class="symbol symbol-light-primary mr-3">\n                                <img alt="Pic" src="assets/media/users/300_14.jpg" />\n                            </div>\n                            <div class="d-flex flex-column align-items-start">\n                                <span class="text-dark-50 font-weight-bold mb-1">Requirement Study</span>\n                                <span class="label label-inline label-light-success font-weight-bold">Scheduled</span>\n                            </div>\n                        </div>\n                    '})}),document.getElementById("addDefault").addEventListener("click",function(){s.addBoards([{id:"_default",title:"New Board",class:"primary-light",item:[{title:'\n                                <div class="d-flex align-items-center">\n                                    <div class="symbol symbol-success mr-3">\n                                        <img alt="Pic" src="assets/media/users/300_13.jpg" />\n                                    </div>\n                                    <div class="d-flex flex-column align-items-start">\n                                        <span class="text-dark-50 font-weight-bold mb-1">Payment Modules</span>\n                                        <span class="label label-inline label-light-primary font-weight-bold">In development</span>\n                                    </div>\n                                </div>\n                        '},{title:'\n                                <div class="d-flex align-items-center">\n                                    <div class="symbol symbol-success mr-3">\n                                        <img alt="Pic" src="assets/media/users/300_12.jpg" />\n                                    </div>\n                                    <div class="d-flex flex-column align-items-start">\n                                    <span class="text-dark-50 font-weight-bold mb-1">New Project</span>\n                                    <span class="label label-inline label-light-danger font-weight-bold">Pending</span>\n                                </div>\n                            </div>\n                        '}]}])}),document.getElementById("removeBoard").addEventListener("click",function(){s.removeBoard("_done")})}};jQuery(document).ready(function(){KTKanbanBoardDemo.init()});