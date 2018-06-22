/*
* 异步操作
* */
import * as types from './mutation-types'
import url from "../globbal/url";
import axios from "axios/index";
import { Permission} from "../axios/Permission";
import store from "./index";

export const USER_INFO = async ({ dispatch, commit, state }, data) => {
    //dispatch可调用其他action方法

}

export const GET_TABLE_DATA = async({ dispatch, commit, state }, data)=>{

    let tableurl = state.tableurl;
    var qs = require('qs');
    const promise = new Promise(function(resolve, reject) {
        axios.post(url.allurl+tableurl,qs.stringify(data)).then(function(res){
            if(res.data.retcode===200){
                commit(types.SET_TABLE_DATA,res.data.data.list);
                commit(types.SET_TABLE_TOTAL,res.data.data.total)
            }
            resolve(res);
        }).catch(function(error){
            reject(error);
        });
    });
    return promise;
}

export const GET_DICTS_DATA = async({ dispatch, commit, state }, data)=>{

    axios.post(url.allurl+url.dicts).then(function(res){
        if(res.data.retcode===200){
            commit(types.SET_DICTS_DATA,res.data.data);
            console.log('数据字典载入成功')
        }
    }).catch(function(error){
        console.log(error,'数据字典载入失败');
    });

}

export const UPDATE_TABLE_DATA = async({ dispatch, commit, state }, data)=>{

    let tableurl = state.sureurl;
    var qs = require('qs');
    const promise = new Promise(function(resolve, reject) {
    axios.post(url.allurl+tableurl,qs.stringify(data)).then(function(res){
        resolve(res);
    }).catch(function(error){
        reject(error);
    });
    });
    return promise;
}

export const SET_BUTTON_PERMISSION = async({ dispatch, commit, state },data)=>{
    commit(types.SET_BUTTON_PERMISSION,data.filter(Permission=>{
        return Permission.button ===1;
    }))
}

export const SET_ASIDETITLE_PERMISSION = async({ dispatch, commit, state },data)=>{
    commit(types.SET_ASIDETITLE_PERMISSION,data.filter(Permission=>{
        return Permission.pId ===null;
    }))
}

export const SET_SYSTEM_PERMISSION = async({ dispatch, commit, state },data)=>{
    for(let system of state.systeminfo ){

    }
}

export const GET_USER_PERMISSION = async({ dispatch, commit, state },data)=> {
    Permission.getUserPermission().then(function(val){
        commit('SET_ASIDETITLE_PERMISSION',val );
        dispatch('SET_ALL_PERMISSION');
    });
}

export const GET_ALL_PERMISSION = async({ dispatch, commit, state },data)=> {
    Permission.getAllPermission().then(function (val) {
        console.log(val);
        commit('SET_ALL_PERMISSION',val);
    });
}

export const SET_ALL_PERMISSION = async({ dispatch, commit, state })=> {

    commit('SET_BUTTON_PERMISSION', JSON.parse(sessionStorage.getItem('permission')).filter(Permission => {
        return Permission.button === 1;
    }));
    commit('SET_SYSTEM_PERMISSION', JSON.parse(sessionStorage.getItem('permission')).filter(Permission => {
        return Permission.pId === null;
    }));
}

export const GET_ENT_PERMISSION = async({ dispatch, commit, state },data)=> {
    var qs = require('qs');
    const promise = new Promise(function(resolve, reject) {
        axios.post(url.allurl+"/enterprise/findEnterpriseResource",qs.stringify(data)).then(function(res) {
            if (res.data.retcode === 200) {
            resolve(res);
            }
        }).catch(function(error){
            reject(error);
        });
    });
    return promise;
}

export const SET_PERMISSION = async({ dispatch, commit, state },data)=> {
    var qs = require('qs');
    console.log(state.permissionUrl);
    const promise = new Promise(function(resolve, reject) {
        axios.post(url.allurl+state.permissionUrl,qs.stringify(data)).then(function(res) {
            if (res.data.retcode === 200) {
                resolve(res);
            }
        }).catch(function(error){
            reject(error);
        });
    });
    return promise;
}
//
// export const AXIO_POST =

