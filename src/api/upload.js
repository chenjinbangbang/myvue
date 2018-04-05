import request from '@/utils/request';

//图片列表
export function getImgList(){
  return request({
    url: '/api/users/getImgList',
    method: 'get'
  });
}

//上传文件
export function upload(data){

  let formData = new FormData();
  formData.append('file',data.file);

  return request({
    url: '/api/users/upload',
    method: 'post',
    data: formData
  });
}

//上传多个文件
export function upload1(data){

  //let formData = new FormData();
  //formData.append('files',data.file1);

  console.log(objectToFormData(data.file1));
  let formData = objectToFormData(data.file1);
  console.log(formData.getAll());

  // return request({
  //   url: '/api/users/upload1',
  //   method: 'post',
  //   data: formData
  // });
}

function objectToFormData (obj, form, namespace) {
  const fd = form || new FormData();
  let formKey;
  
  for(var property in obj) {
      if(obj.hasOwnProperty(property)) {
        let key = Array.isArray(obj) ? '[]' : `[${property}]`;
        if(namespace) {
          formKey = namespace + key;
        } else {
          formKey = property;
        }
      
        // if the property is an object, but not a File, use recursivity.
        if(typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
          objectToFormData(obj[property], fd, formKey);
        } else {
          
          // if it's a string or a File object
          fd.append(formKey, obj[property]);
        }
        
      }
    }
  
  return fd;
    
}