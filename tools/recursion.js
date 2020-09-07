const axios=require('axios')
axios({
  method:'get',
  url:'https://www.tapd.cn/46932618/bugtrace/bugreports/my_view?filter=true&qksearch=true&qksearch=true&data[Filter][created][begin] = 2020-09-07&data[Filter][created][end] = 2020-09-07&page=1',
  header:{
    Cookie: "pgv_pvi=1090025472; __root_domain_v=.tapd.cn; _qddaz=QD.o3jbjb.844o2v.k8zdtpq9; last_iteration_46932618=1146932618001000172; iteration_view_type_cookie=card_view; new_worktable=todo%7C42265311%7Ctodo_all%7Cnormal_list; editor_type=markdown; preview_wiki_when_edit=1; tapdsession=15992092665adc10d364242f6bac675b90a867dff42f9b8447276a664a4a0c34ebd93cb659; pgv_si=s1675330560; _qddab=3-h678d.kenzwpe9; t_u=01f14f8ad9aa37469b7b4b41b8d444ebd2892ba8824ed0d64bbc05cb3bba2f03ed048221ded902543643eec0cda74256520ccab9fa99e2b5cfc67aeafc0e056b02bc493a2b9a30b7%7C1; t_cloud_login=liuyue%40300.cn; _t_uid=858943288; _t_crop=69964336; tapd_div=101_3; dsc-token=5ZH4zukHT3PKNyvt; _wt=eyJ1aWQiOiI4NTg5NDMyODgiLCJjb21wYW55X2lkIjoiNjk5NjQzMzYiLCJleHAiOjE1OTk0NTE2ODd9.79ffee49c25362a6271320a85df5f61cf9ff378d8fa4eaf61d7188fd6775414f"
  }
})
  .then(function(response) {
  console.log(response)
});