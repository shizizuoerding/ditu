!function(i){function t(t){return i.adaptObject(this,e,t,n,o,"loading")}var n='<div class="ui-loading-block show"><div class="ui-loading-cnt"><i class="ui-loading-bright"></i><p><%=content%></p></div></div>',e={content:"加载中..."},o=function(t,n,o){this.element=i(t),this._isFromTpl=o,this.option=i.extend(e,n),this.show()};o.prototype={show:function(){var t=i.Event("loading:show");this.element.trigger(t),this.element.show()},hide:function(){var t=i.Event("loading:hide");this.element.trigger(t),this.element.remove()}},i.fn.loading=i.loading=t}(window.Zepto);