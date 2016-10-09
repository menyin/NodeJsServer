/**
 * Created by CNY on 2016/9/23.
 */
var express = require('express');
var router = express.Router();
var roles=[
    {name:'系统管理员',id:'administrator'},
    {name:'董事长',id:'president'},
    {name:'经理',id:'manager'},
    {name:'员工',id:'staff'}
];
var limits=[
    {name:'人员管理',id:'renyuanguanli'},
    {name:'合同管理',id:'hetongguanli'},
    {name:'项目管理',id:'xiangmuguanli'},
    {name:'新闻管理',id:'xinwenguanli'}
];
var limit_role=[
    {id:'0',role_id:'administrator',limit_id:'renyuanguanli'},
    {id:'1',role_id:'administrator',limit_id:'hetongguanli'},
    {id:'2',role_id:'administrator',limit_id:'xiangmuguanli'},
    {id:'3',role_id:'administrator',limit_id:'xinwenguanli'},
    {id:'4',role_id:'president',limit_id:'hetongguanli'},
    {id:'5',role_id:'president',limit_id:'renyuanguanli'},
    {id:'6',role_id:'manager',limit_id:'xiangmuguanli'},
    {id:'7',role_id:'staff',limit_id:'xinwenguanli'}
];
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('无资源指向');
});
router.get('/roles', function(req, res, next) {
    res.jsonp(roles);
});
router.get('/limits', function(req, res, next) {
    res.jsonp(limits);
});
router.get('/limit_role', function(req, res, next) {
   var role_id= req.query.role_id;
    var result = [];
    if (role_id) {
        for (var i=0;i<limit_role.length;i++) {
            if (limit_role[i].role_id==role_id) {
                result.push(limit_role[i]);
            }
        }
    }
    res.jsonp(result);
});
module.exports = router;
