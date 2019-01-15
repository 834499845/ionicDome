import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HttpServeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServeProvider {
  public post(url: string, params: any = null, successCallback, errorCallback): any {
    // 此处使用的post模式为非严格模式，如果要使用严格模式，请把参数放在第二个位置 覆盖null
    return this.http.post(url, null, {
      params: params
    }).subscribe((res: any) => {
      this.responseSuccess(res, function (statusMessage) {
        if (successCallback) {
          successCallback(res, statusMessage);
        }
      });
    }, err => {
      if (errorCallback) {
        errorCallback(err);
      }
    });
  }
  // get数据
  public get(url: string, params?: any): any {
    return this.http.get(url, params);
  }
  // 删除相关请求
  public delete(url: string, params?: any): any {
    return this.http.delete(url, params);
  }

  /**
   * 处理响应的事件
   * @param res
   * @param {Function} error
   */
  private responseSuccess(res: any, callback) {
    if (res.statusCode !== 200) { // 失败
      if (res.statusMessage) {
        callback({ statusCode: res.statusCode, statusMessage: res.statusMessage });
      } else {
        const data = res.data;
        let errorMsg = '操作失败！';
        data.map(i => {
          errorMsg = i.errorMsg + '\n';
        });
        callback({ statusCode: res.statusCode, statusMessage: errorMsg });
      }
    } else {
      callback(res);
    }
  }

  constructor(public http: HttpClient) {
    console.log('Hello HttpServeProvider Provider');
  }
  /**
    * 处理请求失败事件
    * @param url
    * @param err
    */
  private requestFailed(url: string, err) {
    let statusMessage = '请求发生异常';
    const status = err.status;
    if (status === 0) {
      statusMessage = '请求失败，请求响应出错';
    } else if (status === 404) {
      statusMessage = '请求失败，未找到请求地址';
    } else if (status === 500) {
      statusMessage = '请求失败，服务器出错，请稍后再试';
    } else {
      statusMessage = '未知错误，请检查网络';
    }
    return statusMessage;

  }
}
