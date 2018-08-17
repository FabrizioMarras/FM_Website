(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 1000,
	fps: 15,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D12E2E").s().p("Ah9E0QgOAAgOgHQgbgOAAgjIAAn3QAAgjAbgOIAcgHID6AAIAcAHQAcAOAAAjIAAH3QAAAjgcAOQgOAHgOAAgAgSDtQgJAIAAALQAAAMAJAIQAIAJAKAAQALAAAIgJQAIgIAAgMQAAgLgIgIQgIgJgLAAQgKAAgIAJgAiZDRIEyAAIAAm+IkyAAgAhFkRIAAACQABAGAFAAIB+AAQAHAAAAgGIAAgCQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIh+AAQgFAAgBAGg");
	this.shape.setTransform(9.1,15.4,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D12E2E").s().p("AgaBaIAwhNIgBAAQgEADgHABQgGACgGAAQgLAAgLgEQgKgEgHgHQgGgFgFgKQgEgLAAgLQAAgNAEgKQAFgKAHgIQAJgHAJgEQALgEALAAQAMAAAKAEQAJADAKAIQAIAIAEAKQAEALAAAMQAAANgEAMIgMAVIguBNgAgPhHQgGADgGAGQgEAEgEAJQgDAHAAAJQAAAIADAIQACAGAGAGQAFAFAHACQAHADAIAAQAJAAAHgDQAHgCAFgFQAFgEADgIQADgJAAgHQAAgJgDgHQgCgHgGgGQgGgGgGgDQgIgDgIAAQgHAAgIADg");
	this.shape_1.setTransform(175,14.5,0.5,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D12E2E").s().p("AgUBZQgLgEgHgGQgHgGgGgKQgEgKAAgLQAAgJACgIQACgHAFgGQAFgHAGgEQAGgCAHgCIAAgBQgFgCgGgEQgFgFgDgEQgEgHgBgFQgCgGAAgHQAAgMAEgIQAEgJAGgGQAIgGAIgDQALgDAHAAQAIAAALADQAKAEAGAFQAGAGAFAJQAEAKAAAKQAAAFgCAIIgGAMQgDAFgFAEQgGAEgFACIAAABQANADALALQAJANAAASQAAALgEAKQgFAJgIAHQgIAHgKADQgKAEgLAAQgKAAgKgEgAgOAFQgGACgHAGQgFAGgCAGQgDAHAAAIQAAAIADAGQACAHAFAGQAFAEAIAEQAHACAHAAQAJAAAGgCQAIgEAFgEQAFgFADgIQACgHAAgHQAAgIgCgHQgDgHgFgFQgHgGgGgCQgGgCgJAAQgHAAgHACgAgLhKQgGACgFAGQgEAEgCAGQgDAFAAAIQAAAIADAFQACAGAFAEIAKAHQAFACAGAAQAHAAAFgCQAHgEAEgDQADgEAEgGQACgHAAgGQAAgHgCgGQgEgHgDgDQgFgGgGgCQgEgCgIAAQgGAAgFACg");
	this.shape_2.setTransform(165.2,14.6,0.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D12E2E").s().p("AglBYIBHifIhVAAIAAgQIBnAAIAAAQIhFCfg");
	this.shape_3.setTransform(155.5,14.6,0.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D12E2E").s().p("AglBYIBGifIhUAAIAAgQIBnAAIAAAQIhGCfg");
	this.shape_4.setTransform(145.7,14.6,0.5,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D12E2E").s().p("AgaBaIAwhNIAAAAQgFADgHABQgHACgFAAQgLAAgLgEQgJgEgIgHQgGgFgFgKQgEgLAAgLQAAgNAEgKQAFgKAIgIQAIgHAKgEQAKgEALAAQAMAAALAEQAIADAKAIQAHAIAFAKQAEALAAAMQAAANgFAMIgLAVIguBNgAgPhHQgGADgGAGQgEAEgEAJQgDAHAAAJQAAAIADAIQACAGAGAGQAFAFAHACQAHADAIAAQAJAAAHgDQAHgCAFgFQAFgEADgIQADgJAAgHQAAgJgDgHQgCgHgGgGQgGgGgGgDQgIgDgIAAQgHAAgIADg");
	this.shape_5.setTransform(136,14.5,0.5,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D12E2E").s().p("AAMBYIAAiZIgeAbIgLgMIArglIAQAAIAACvg");
	this.shape_6.setTransform(125.5,14.6,0.5,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D12E2E").s().p("AghBUQgOgKgIgRIARgHQAEANALAHQAKAHANAAQAIAAAFgCQAIgDAFgFQAFgFAEgHQADgIAAgIQAAgKgEgGQgDgHgIgFQgGgEgIgCIgPgCIgIAAIAAgOIAIAAQAHAAAHgBQAIgDAFgDQAGgEADgGQADgGAAgJQAAgHgDgGQgCgHgGgEQgDgEgIgDQgFgCgGAAQgLAAgJAFQgIAFgFAKIgQgIQAIgOANgGQANgIAPABQAKAAAJADQAJADAIAGQAGAFAFAKQAEAJAAALQAAAPgIALQgKAMgNADIAAAAQAQADAKAKQAKAMAAARQAAANgFAKQgFAKgHAGQgJAIgKADQgJAEgLAAQgTgBgOgIg");
	this.shape_7.setTransform(116.3,14.6,0.5,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D12E2E").s().p("AASBYIAAgrIhPAAIAAgRIBJhzIAYAAIAAB1IAaAAIAAAPIgaAAIAAArgAgqAeIA8AAIAAhgIAAAAg");
	this.shape_8.setTransform(106.7,14.6,0.5,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D12E2E").s().p("AgWBWQgLgEgHgHQgHgHgFgLQgEgIAAgOQAAgOAFgMQADgJAIgLIAuhOIAVAAIgwBNIAAABQAEgDAIgCIAMgCQAMAAAJAEQAJADAIAIQAIAHAEAJQAEAKAAAMQAAANgEAJQgFALgIAHQgHAIgLADQgJAEgNAAQgMAAgKgEgAgPAAQgIABgEAFQgGAFgCAIQgDAGAAAKQAAAHADAJQACAGAGAHQAEAEAIAEQAIADAHAAQAIAAAIgDQAIgFAEgDQAFgGADgHQADgIAAgIQAAgJgDgHQgDgIgFgFQgEgFgIgBQgHgDgJAAQgIAAgHADg");
	this.shape_9.setTransform(91.3,14.7,0.5,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D12E2E").s().p("AgXBnIANgWQAGgMAEgNQADgPACgNQADgQAAgMQAAgLgDgQQgCgOgDgOQgDgNgHgMIgNgWIANgIQAJAMADALQAIAOAEANQAEANAEARQACARAAANQAAAOgCARQgEARgEANQgEANgIAOIgMAXg");
	this.shape_10.setTransform(83.5,15.4,0.5,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D12E2E").s().p("AgaBVQgLgIgHgOQgHgLgDgSQgCgPAAgTQAAgSACgOQADgRAHgNQAHgOALgHQALgIAPAAQAQAAALAIQALAIAHANQAHAPACAPQADARAAAPQAAARgDARQgCAPgHAOQgHANgLAJQgLAHgQABQgPgBgLgHgAgShFQgIAIgEALQgEAJgDAQQgBAOAAALIABAbQADAPAEAKQAFALAHAHQAHAHALAAQAMAAAHgHQAIgHAEgLQAFgLABgOQACgNAAgOQAAgNgCgMQgBgOgFgLQgEgKgIgJQgIgHgLAAQgKAAgIAHg");
	this.shape_11.setTransform(75.2,14.6,0.5,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D12E2E").s().p("AgBBYQgIgOgEgNQgFgPgCgPQgDgPAAgQQAAgOADgQQACgQAFgOQAEgNAIgOQADgLAJgMIANAIIgNAWQgGAMgEANQgBAJgEATQgDAQAAALQAAAMADAQQADASACAKIAKAZIANAWIgNAIIgMgXg");
	this.shape_12.setTransform(67,15.4,0.5,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D12E2E").s().p("AAMBYIAAiZIgeAbIgLgMIArglIAQAAIAACvg");
	this.shape_13.setTransform(52.9,14.6,0.5,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D12E2E").s().p("AghBUQgPgLgHgQIARgHQAEANALAHQAKAHANAAQAIAAAFgCQAIgDAFgFQAFgDAEgJQADgHAAgJQAAgLgEgFQgDgHgHgFQgGgDgJgDIgPgCIgIAAIAAgOIAIAAQAGAAAIgBQAJgDAEgDQAGgEADgGQAEgFAAgKQAAgIgEgFQgCgFgFgGQgFgEgHgDQgFgCgGAAQgMAAgHAFQgJAFgGAKIgPgIQAJgOANgGQANgIAOABQALAAAIADQAJADAIAGQAHAGAEAJQAFAIAAAMQgBAQgIAKQgJAMgOADIAAAAQAQADAKAKQAKAMAAARQAAAMgEALQgFAKgIAGQgHAIgLADQgKAEgLAAQgSgBgPgIg");
	this.shape_14.setTransform(43.6,14.6,0.5,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D12E2E").s().p("AgGA/IAAg4Ig4AAIAAgNIA4AAIAAg4IANAAIAAA4IA4AAIAAANIg4AAIAAA4g");
	this.shape_15.setTransform(33.5,15.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// BG
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AxDEWIAAorMAiHAAAIAAIrg");
	this.shape_16.setTransform(95.2,14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-13.2,218.5,55.7);


(lib.weel7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2001B").s().p("AgEEOQAAgIgEgGQgEgGgFAAQgMAAgEATIgMgCQAAgJgCgHQgEgGgEgBQgFgBgGAFQgFAEgCAIIgOgEQADgJgCgGQgCgGgFgDQgFgBgGADQgEAEgFAHQgGgCgGgEQADgHgBgHQAAgHgEgDQgLgFgLAOIgLgHQAEgHABgHQAAgHgFgDQgEgDgGABQgGACgGAFIgJgJQAMgOgJgJQgDgDgHAAQgGABgGAEIgIgLQAFgFADgGQACgHgDgEQgDgEgGAAQgHgBgHAEIgHgMQAIgFADgFQADgGgCgGQgCgEgGgBQgHgBgIACIgFgOQAIgCAFgGQAEgFgCgFQgBgFgHgDQgGgCgHABIgDgNQAIgCAGgFQAEgEAAgGQgBgEgFgEQgHgEgIABIgBgOQAKAAAFgCQAGgEAAgFQABgGgGgEQgGgEgIgCIACgNQAJABAGgDQAGgDACgFQABgFgGgGQgEgEgJgDIAEgNQAJADAHgCQAHgCACgFQACgGgEgFQgFgGgHgEIAFgMQAJAEAHAAQAHgBADgFQADgFgDgHQgEgGgHgFIAHgLQAIAFAHABQAIABAEgEQADgFgCgHQgDgIgHgGIAKgKQAGAIAHABQAIACAFgDQAEgFgBgIQgCgHgGgHIAKgIIABAAQAFAHAIAEQAHADAEgDQAFgEABgHQAAgIgGgJIAMgHIAAABQAEAKAHAEQAGAFAGgDQAFgDACgIQABgIgFgJIAAAAIAOgFIAAACQACAJAGAFQAGAGAGgBQAGgCACgIQACgHgCgKIgBgBIAOgDIAAACQABAKAFAGQAFAGAGAAQAGgBADgHQAEgIgBgJIgBgCIAOgBIAAADQAAAJACAHQAEAIAGAAQAGAAAFgGQAEgHAAgKIAAgCIAPABIgBAEQgCAKADAHQADAHAGACQAFABAGgGQAGgGACgKIAAgDIAOAEIgCAEQgDAJABAIQACAIAGACQAFADAGgFQAHgGADgIIABgEIAOAGIgCAEQgGAIABAIQAAAIAGADQAFADAHgEQAHgEAEgIIADgDIAMAIIgDADQgHAIAAAIQgBAIAEADQAFAFAIgEQAHgCAGgIIACgCIALAJIgDADQgHAHgDAIQgCAHAEAEQAEAFAJgBQAHgCAHgGIADgDIAJAMIgEACQgIAFgDAHQgEAHAEAGQADAEAIAAQAIABAIgGIADgDIAHAOIgEABQgIAEgFAHQgFAHADAFQADAFAHABQAJABAIgDIADgCIAFAOIgEAAQgKADgEAGQgGAGABAGQACAGAIACQAIACAJgDIADgBIACAPIgDAAQgKABgGAFQgHAFABAGQABAGAHAEQAIADAJgBIACgBIAAANIgCAAQgKgBgHAEQgHAEgBAGQABAGAGAEQAHAFAKABIACAAIgCANIgDAAQgJgCgIADQgHACgCAGQgBAHAGAFQAGAFAJADIACAAIgEANIgDgBQgIgDgJACQgHABgCAGQgCAFAFAHQAFAGAIAEIABAAIgGAMIgBgBQgIgFgIABQgIAAgEAFQgDAGAFAHQAEAGAIAFIAAABIgIALIgBgBQgHgFgIgBQgIgCgEAGQgDAEADAHQACAIAHAGIgJAKQgHgIgIgBQgHgDgEAEQgFAEACAIQABAHAFAHIgLAJQgEgJgIgCQgHgEgFAEQgEADgBAIQABAGAEAJIgMAGQgEgJgHgDQgGgEgFACQgFACgCAIQgBAHADAIIgMAEQgDgIgFgGQgGgEgGABQgFACgCAHQgDAHACAIIgOACQgCgJgEgFQgFgGgGABQgFABgDAGQgDAGgBAIgAAVDiQAlgDAkgQQAkgRAbgZQgrARgogUQgNAsgoAUgAhrDHQgdgiAFgsQgtABgfggQAQAjAYAcQAaAdAiARIAAAAgAg+BNQgXAPgFAbQgFAbAOAXQAPAXAbAFQAbAFAVgPQAXgPAFgbQAGgagQgXQgPgXgYgFIgOgCQgTAAgRALgABkADQgbAHgNAYQgOAXAIAbQAHAaAYAOQAYANAagGQAbgIANgYQAOgYgIgaQgHgagXgOQgQgJgQAAQgKAAgJADgAiNgxQgaADgSAVQgRAWADAZQAEAbAVASQAVAQAbgDQAcgDARgVQARgWgDgbQgDgZgVgRQgSgPgXAAIgJABgACygSQAlAXAHAtQAIglgEglQgFgmgPgjQACAvgeAggAgZgbQgMALAAAQQgBAOALAMQALALAQABQAOACAMgMQAMgKAAgRQACgOgMgMQgKgLgRgBIgBgBQgOAAgLALgAA3iLQgUASgBAdQgBAbASAUQATAUAbABQAbABAUgSQAVgSABgcQACgbgTgVQgSgTgcgCIgEAAQgZAAgTARgAjFhvQgSAigHAlQAYgmAsgJQgPgpAUgqQgdAbgTAggAhRi2QgaALgJAaQgKAaALAYQAMAZAZAKQAbAKAYgMQAZgLAIgZQAKgbgMgZQgJgZgagJQgMgEgMAAQgNAAgNAGgAgbjhQAoAMAXAnQAjgbAtAGQgigTglgIQgWgEgXAAQgNAAgOABg");
	this.shape.setTransform(27.1,27.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.2,54.2);


(lib.weel6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2001B").s().p("AgHEkQAAgJgEgGQgDgHgGgBQgGAAgFAFQgFAGgCAKIgPgDQACgJgCgHQgDgHgGgCQgFgCgHAGQgGAFgDAJIgOgEQAEgJgBgIQgCgIgFgDQgGgCgHAEQgHAFgEAJIgNgHQAFgIAAgJQAAgIgFgDQgGgEgHAEQgIADgGAJIgMgJQAHgIABgIQACgIgFgEQgFgFgIADQgJACgHAIIgKgLQAIgHADgHQADgJgEgFQgEgFgJABQgIABgJAHIAAAAIgJgMIAAAAQAJgFAFgIQAEgHgDgGQgEgFgIgBQgJAAgJAFIgBABIgHgOIABAAQAKgEAFgHQAGgHgDgGQgCgGgJgBQgJgCgJAEIgCAAIgFgOIACAAQAKgCAHgGQAGgGgBgHQgCgGgIgDQgIgDgKACIgDABIgCgQIACAAQALAAAHgFQAHgFAAgGQgBgHgHgEQgIgEgKAAIgDAAIAAgNIADAAQAKABAIgDQAIgEAAgGQABgHgHgFQgGgGgLgBIgEAAIADgPIADABQAKACAJgCQAIgCACgHQABgGgGgGQgGgHgKgDIgEAAIAFgPIAEABQAJAFAJgBQAJgCACgGQADgFgFgIQgFgHgJgEIgEgCIAHgOIADACQAJAGAJABQAIAAAEgGQAEgFgEgIQgEgIgJgGIgDgCIAJgNIADADQAIAHAIACQAJACAEgFQAEgFgCgIQgCgJgIgHIgDgDIALgLIACAEQAHAIAIADQAIACAFgEQAFgEgBgIQgBgJgGgIIgDgDIANgJIACADQAFAJAHAEQAIAFAGgEQAFgDABgIQAAgJgFgJIgDgEIAPgHIABAEQAEAKAGAFQAHAFAGgCQAGgCACgJQACgIgEgKIgBgEIAPgEIAAADQACAKAGAHQAGAGAGgCQAHgBADgIQADgIgCgKIgBgEIAPgCIAAADQABAKAFAIQAFAHAGgBQAHAAAEgHQACgIAAgKIgBgDIAQAAIgBACQgBALAEAIQAEAIAGAAQAHABAFgHQAFgHABgKIABgDIAPADIgBACQgDAKADAIQACAJAGABQAHACAGgGQAHgGACgKIABgCIAOAGIgBABQgEAJABAJQABAIAGADQAGADAHgFQAIgFAEgKIAAgBIANAIQgFAJgBAIQAAAJAFAEQAGADAIgDQAIgEAFgJIAAAAIAMAJQgHAIgBAIQgCAJAFAEQAFAEAIgCQAIgCAHgIIAKALQgHAGgDAIQgDAIAEAFQAEAFAIgBQAJgBAIgGIAIAMQgIAGgEAHQgEAHADAFQADAGAIAAQAJABAIgFIAHAOQgJADgFAHQgEAHACAFQACAGAIACQAHABAKgCIAEAOQgJACgGAGQgFAFABAGQABAGAIADQAHADAJgBIACAOQgJACgGAEQgGAFAAAGQABAGAGAEQAGACAJAAIAAAPQgJAAgGADQgHAEAAAGQgCANAVAFIgDAOQgJgBgGACQgHADgCAFQgBAGAEAGQAFAFAIAEIgFANQgIgCgHABQgHACgCAFQgDAFAEAGQADAHAIAEIgHANQgIgEgHABQgHAAgDAFQgDAFACAHQADAHAHAFIgJAMQgHgFgHgBQgIAAgDAEQgEAEABAHQACAHAFAHIgKAKQgGgGgHgCQgHgCgEAEQgFADABAIQAAAHAEAHIgMAJQgFgHgGgDQgHgDgFADQgFADgBAHQAAAIADAIIgNAGQgEgIgGgEQgGgDgFACQgGACgCAHQgCAHACAJIgNAEQgDgJgGgEQgFgFgGABQgFABgDAHQgDAHABAJIgPACQgBgJgFgFQgEgGgGAAQgGAAgEAHQgEAGgBAJgACXgDQgqATgqAuQgqAtgRAtQgRAvAUAUQAXAVAygTQAygTAogrQAogsAOgzQAOg0gXgSQgKgKgQAAQgRAAgZANgAg2CtQgHAFgCAIQgCAJAFAHQAFAIAIACQAJACAHgFQAIgFACgIQACgJgFgHQgFgIgJgCIgFAAQgFAAgGADgAjDhiQgdAKgJA0QgIAzARA4QASA4AmAmQAlAmAegJQAcgJADgzQADgvgTg8QgTg5gdglQgagggYAAQgGAAgFABgAgBg4QgYABgQASQgRARABAWQACAYARAQQASARAWgBQAYgCAQgRQAQgSgBgWQgBgYgSgQQgQgPgWAAIgBAAgAC0hPQgJACgEAIQgEAIADAIQACAJAIAEQAIAEAIgDQAJgCAEgIQAEgIgDgJQgCgIgIgEQgFgCgFAAIgGABgAg5jkQg0AOgHAeQgGAcArAdQAnAaA7ANQA9ANAvgHQAygIAGgcQAHgegpgiQgpgig6gNQgcgGgZAAQgcAAgaAHgAiSiaQgJABgGAGQgGAHAAAIQABAJAGAGQAHAGAIAAQAJAAAGgHQAGgHAAgIQgBgJgGgGQgGgGgIAAIgBAAg");
	this.shape.setTransform(29.3,29.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.6,58.6);


(lib.weel5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2001B").s().p("AgXODQgSAAgMgOQgMgOACgSIADgWQAEgagRgVQgQgVgagEQgbgDgVAPQgVARgEAaIgCASQgCASgQAKQgPALgSgFIAAAAIgjgLQgRgFgHgRQgIgQAIgRIAIgUQALgYgKgZQgJgZgZgLQgYgLgZAKQgZAKgLAYIgHAQQgHARgSAGQgRAGgQgLIgfgTQgPgLgCgRQgCgSALgOIAOgRQARgUgCgbQgCgbgUgRQgVgRgaADQgbABgRAVIgMAOQgMANgSAAQgTABgMgOIgYgbQgLgOADgSQADgSAPgKIASgMQAWgOAFgbQAGgagPgWQAHgZgVgPQgUgPgWAOIgwAgQgQAKgRgEQgSgGgIgRIgPghQgHgQAIgQQAIgQARgGIATgGQAXgHANgTQAOgVgDgXQgEgfgagPQgZgQgdAIIgRAGQgRAFgQgKQgQgJgCgTIgFgkQgCgSALgOQAMgNASAAIAVAAQAYgBASgPQASgOAEgYQAFgcgUgXQgTgXgeABIgSAAQgSAAgNgOQgMgOACgSIAGgkQADgRAPgKQAQgKARAFIAVAGQAZAHAYgNQAXgNAHgaQAHgagNgXQgNgYgZgGIgSgGQgRgEgIgRQgIgRAHgRIAQghQAIgQARgFQARgFAPAKIARALQAVANAYgDQAYgEAPgRQAVgXgFgdQgEgegZgQIgQgJQgPgKgDgSQgDgSAMgPIAYgbQAMgOASABQASAAAMANIANAQQAQASAYADQAYAEAUgMQAagRAEgdQAEgegUgWIgMgNQgMgOADgTQACgSAPgKIAfgTQAPgJASAFQARAFAIAQIAIATQAKAVAWAKQAWALAWgGQAegJAMgbQAMgcgMgaIgIgQQgIgRAIgRQAHgQASgGQANgEAWgGQARgFAPAKQAPAKADARIADAXQAEAZAWARQAWAPAagEQAYAHATgQQATgRgEgZIgHgoQgDgSAMgPQAMgOATAAIAiAAQASABAMANQAMAOgDASIgDAWQgEAdAVAXQAUAWAegBQAYgBARgRQARgQAEgYIACgQQACgSAPgKQAQgLARAFIABAAQATAFAQAGQARAFAHARQAHARgHAPIgIATQgKAWAGAXQAHAYATANQAaAQAdgJQAcgIAMgbIAHgQQAIgSARgFQASgFAQAKIAeAUQAPAKADARQACASgMAOIgNAPQgPATgBAYQAAAYAPASQATAXAfAAQAeAAATgXIALgOQAMgNATAAQASgBANAOIAXAbQALAPgCARQgDASgPAKIgSAMQgWAPgGAaQgFAaAOAWQgGAZAUAPQAVAQAVgPIAxggQAPgKASAFQASAFAIARIAOAgQAHARgHAQQgIARgRAFIgVAGQgZAIgNAYQgNAYAIAZQAIAaAYAMQAYANAZgIIARgGQASgFAQAKQAPAKADASIAFAkQACASgMANQgMAOgSAAIgWABQgaAAgTATQgTATAAAZQABAbATASQATATAbgBIARAAQATAAAMAOQANAOgDASIgFAkQgDASgQAJQgPAKgRgFIgVgGQgagHgXANQgYANgHAaQgHAZANAYQANAYAaAGIARAGQASAEAIARQAIARgIARIgPAgQgIARgRAFQgSAEgPgJIgRgLQgUgMgYACQgYADgQASQgUAWAEAeQAFAeAZAQIAPAJQAQALADARQADATgMAOIgYAbQgNANgSAAQgSAAgLgNIgPgRQgSgUgbgBQgagCgUASQgUARgCAbQgBAbARAUIAMANQAMAOgCATQgCASgQAKIgeATQgQAKgRgGQgRgFgIgQIgJgUQgMgYgZgJQgZgJgYALQgYAMgJAZQgJAZALAZIAHAQQAIAQgHARQgIARgRAFIgjAKQgRAFgQgKQgPgKgDgSIgDgWQgEgZgWgRQgVgPgbAEQgaAEgQAWQgQAWAEAZIADASQADATgMAOQgMAOgSAAgAhXDEQgTALgGAWQgHAWAMAUQALATAWAGQAVAHAUgLQAUgLAGgXQAGgVgLgUQgLgUgWgGQgHgCgIAAQgOAAgNAHgAhFh6QgzAcgQA5QgPA2AcAzQAdAzA4ARQA3APAzgdQAzgdAQg4QAQg3gdgyQgdg0g4gQQgUgFgRAAQgkAAghATgADZAUQgTALgHAWQgGAWALATQAMAUAVAHQAWAFAUgLQAUgKAGgWQAGgXgLgTQgLgUgWgGQgIgCgHAAQgOAAgNAHgAkHhsQgTALgGAWQgHAWAMAUQALATAWAGQAVAHAUgLQAUgLAGgXQAGgVgLgUQgLgUgWgGQgHgCgIAAQgOAAgNAHgAApkcQgTALgHAWQgGAWALATQAMAUAVAHQAWAGAUgMQAUgKAGgWQAGgXgLgTQgLgUgWgGQgIgCgHAAQgOAAgNAHg");
	this.shape.setTransform(89.4,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178.8,179.9);


(lib.weel4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2001B").s().p("AgwKeIgOhCIgTgDIAAABIgTgEQgYgEgegHIgkA5Ig2gTIAHhDQgsgSgogZIgzAsIgugiIAbg+QglgggegiIg/AaIgigtIAsg0IgBgBQgXglgUgtIhDAIIgTg2IA4glQgNgugFguIhCgNIgCg3IBBgSQACgtAIgwIg8ggIAPg3IBDACQAPgtAWgpIgvgwIAegxIBAAWQAbgnAiggIgfg8IArgmIA3AoQATgPATgMQAWgOATgJIgNhDIA0gXIAqA2QAugRAsgIIAHhDIA5gHIAXBAQAogCA0AFIAbg+IA4AKIADBEQArALAuATIAsgzIAzAbIgQBBQAqAcAhAbIA6gjIAnAoIgjA6QAgAkAXAmIABABIBCgRIAbAyIgzAtQAUAqAMAuIBDADIALA3Ig+AcQAFAugBAuIBAAXIgGA4IhDAJQgFAXgIAeIgEATIgBAAIgGASIA2ApIgWA0IhDgMQgWAqgbAmIAnA2IglAsIg8gfQghAhglAcIAWBAIgwAfIgxgvQgpAVgsARIACBDIg3APIghg7QgsAIgwADIgTBBgABpCkQhpBCgZB6IgnCsQBZALBYgTQBbgUBQgyQBQgzA4hKQA3hIAchWIisgnQgjgIgiAAQhSAAhLAwgAoCBwQAVBbAyBQQAzBQBLA5QBHA2BWAcIAnisQAbh5hDhpQhDhoh5gaIisgnQgLBYASBZgAgrhGQgdATgJAjQgHAgATAeQATAeAiAHQAhAIAdgTQAfgTAHgiQAIghgTgeQgTgdgjgIQgJgCgKAAQgVAAgWANgAB9lIQgbB5BDBpQBCBnB5AbICtAnQALhYgShZQgVhbgyhQQgzhQhKg4QhIg3hXgcgAhtoCQhbAUhQAyQhPAzg5BKQg3BIgcBWICsAnQB5AbBphDQBnhCAbh6IAnisQgigEgiAAQg2AAg3AMg");
	this.shape.setTransform(67.3,67.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134.5,134.5);


(lib.weel3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2001B").s().p("AgBHaQglAAgkgGIgYAwIgrgKIAAg1QgkgLgggQIgkAmIgngXIAPgyQgegWgagYIguAaIgeghIAegsIgBAAQgYgfgQgeIg0AMIgTgpIApghQgMgigJgjIg0gGIgHgsIAxgTQgCghADgmIgxgUIAHgrIA1gFQAIgnANgeIgogiIATgoIAzAMQASgfAYgeIgdgsIAeggIAuAaIAcgXIAegWIgQgyIAngXIAkAnQAggPAkgLIABg1IArgKIAXAvQAjgEAkAAIAQgzIAsAEIAIA0QAlAGAjAKIAegrIApARIgHA0QAfAPAfAWIArggIAiAbIgXAxQAaAYAWAdIABAAIAygSIAZAlIgkAmQATAhAMAhIA0gDIANArIgtAaQAIAkADAlIAyAMIAAAqIgzAMQgDAngJAhIAuAbIgNArIg1gEQgNAigTAgIAjAnIgZAkIgxgTQgXAdgbAYIAWAxIgjAbIgpghQgfAWghAPIAHA0IgoAQIgfgrQgkAKgjAGIgJAzIgrAEgAhSFwIgKAhQBsAaBsgiIgMghgAk2EOQBJBVBsAlIAKgiIijhtgACUFbIAMAhQAygVAsgjQAsgjAhgsIgdgUgAhHFKICogIIhGi+QgWAGgWgEgAj7DgICPBfIA2jDQgWgKgQgQgABSBqQgHAHgMAGIBGC/ICHhrIiphxQgIAKgJAGgAmZAjQAKBxBCBcIAbgVIhFi5gAF4AFIg2C9IAdATQA7hhABhxgAlOAgIA7CiICfh+QgLgUgFgYgACFAOQgBAWgLAXICoBwIAuilgAgogyQgWARgDAcQgDAZARAWQARAWAbADQAaADAWgSQAVgQADgcQADgZgQgWQgRgVgcgEIgHAAQgWAAgSAOgAmbgBIAjgBIA1i9IgcgTQg6BhgCBwgAlPgDIDKgIQADgYAKgVIiphxgAB0hBQALASAFAZIDKgIIg7ihgAEyjYIBFC5IAigCQgKhxhBhbgAkMjIICpBwIARgQQALgIAIgFIhGi+gAA2h5QAWAKAQAQICfh+IiOhggAhhlAIBGC+QAXgFAVAEIA3jEgAj9lCQgsAkghArIAdAUICah5IgMgiQg0AYgqAggAB4ljICjBtIAbgWQhKhVhrgkgAh7mGIAMAgIDCgHIAJgiQgvgLgtAAQg+AAg9AUg");
	this.shape.setTransform(52.3,52.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.6,105);


(lib.weel2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2001B").s().p("AgEDSQgEAAgDgDQgDgEABgEIAAgFQABgGgEgFQgEgFgGgBQgGgBgFAEQgFAEgBAGIAAAFQgBAEgEACQgDACgEgBIgIgCQgEgBgCgEQgCgEACgEIACgFQADgGgDgFQgCgGgGgDQgFgCgGACQgGADgDAFIgBAEQgCAEgEABQgEABgEgCIgHgFQgEgCAAgEQgBgEADgDIADgFQAEgFAAgGQgBgFgEgEQgFgEgGAAQgHAAgEAFIgCADQgDADgEABQgFAAgDgEIgFgGQgDgEABgDQAAgEAEgDIAEgDQAFgEACgFQABgHgEgEQACgHgFgDQgEgDgGADIgLAHQgDADgFgCQgEgBgCgDIgDgIQgCgEACgEQACgEAEgBIAEgCQAGgBADgEQADgFgBgGQgBgHgGgEQgGgEgGACIgEACQgEABgEgCQgEgDAAgEIgCgIQAAgEADgDQADgDAEgBIAFAAQAMAAADgNQABgEgFgGQgEgFgHAAIgFAAQgEAAgDgDQgDgEABgDIABgJQABgEAEgDQADgCAEABIAFACQAGABAFgDQAGgCACgHQABgFgDgGQgDgFgGgDIgEAAQgEgBgCgFQgCgDACgFIAEgHQACgEAEgBQAEgBADACIAEACQAFAEAFgBQAGgBAEgEQAFgFgCgHQgBgHgGgEIgDgCQgEgCAAgEQgBgFADgDIAFgHQADgCAEAAQAFAAACACIAEAEQADAEAGABQAFABAFgCQAGgEABgHQABgHgFgGIgCgDQgDgDAAgEQABgFADgCIAIgEQADgCAEABQAEABACADIACAFQADAFAFADQAFACAFgBQAHgCADgHQADgGgDgHIgCgEQgCgDACgFQACgDAEgBIAIgDQAEgBADACQAEADABAEIAAAFQABAGAFAEQAGAEAGgCQAFACAFgDQAEgEgBgGIgBgKQgBgEADgDQADgDAEgBIAGABQAEAAADADQADADgBAEIAAAFQgBAHAFAFQAEAGAHgBQAGAAAEgEQAEgEABgFIAAgEQABgFADgCQAEgCAEABIAIADQAEABACADQACAFgCADIgCAFQgCAFABAFQACAFAEAEQAGADAHgBQAHgCADgHIABgDQACgEAEgCQAEgCAEADIAHAFQAEACAAAEQABAFgDACIgDAFQgEADAAAHQAAAFAEAEQAEAGAHgBQAHABAFgGIACgDQADgDAFgBQAEABADADIAFAGQADAEgBAEQAAAEgEACIgEADQgGAEgBAFQgBAHAEAFQgCAFAFAEQAFAEAFgEIALgHQAEgCAEABQAEABACAEIADAIQACAEgCADQgCAEgEABIgFACQgGABgDAGQgDAFACAGQACAHAGACQAFAEAGgCIAEgCQAEgBAEADQADACABAEIACAIQAAAFgDADQgDADgEAAIgFAAQgGAAgEAFQgFAEAAAEQAAAGAFAFQAEAEAGABIAFgBQAEAAADADQADADgBAFIgBAJQgBADgEADQgDACgEgBIgFgBQgGgDgFAEQgGADgCAGQgBAGADAFQADAGAGACIAEABQAEABACADQACAFgCADIgEAIQgCAEgEABQgDABgEgCIgEgDQgFgCgFAAQgGABgEAEQgFAGACAHQABAGAGAEIADACQAEACAAAFQABAEgDADIgFAHQgDADgEAAQgFAAgCgDIgEgEQgEgFgGAAQgGAAgFADQgFAEAAAHQAAAGAEAFIACADQADADAAAFQgBAEgEACIgHAFQgDACgEgCQgEAAgCgFIgCgEQgDgFgGgDQgGgCgFADQgGADgCAFQgCAGACAGIACAEQACADgCAFQgCADgEABIgIADQgEABgDgCQgEgCgBgEIAAgGQgBgGgFgEQgFgDgHABQgGAAgEAGQgDAFABAGIAAAEQABAEgDAEQgDADgEAAgAgTAtQgFAEgBAFQgCAEADAFQADAFAFABQAFABAFgCQAEgCACgGQAAgFgCgEQgCgFgFgBIgEgBQgDAAgDABgAgPgbQgMAGgEAOQgDALAHAMQAGAMANADQAMAEAMgHQALgGAEgNQAEgLgHgNQgHgLgNgFIgIgBQgHAAgIAFgAAyAEQgEADgCAFQgBAGADAEQACAEAFACQAGACAEgDQAFgDABgFQACgFgDgFQgCgEgGgCIgDAAQgDAAgEABgAg8gYQgFADgBAFQgCAFADAEQADAFAFACQAFAAAEgBQAFgEABgEQACgGgDgEQgCgFgFgBIgEgBQgDAAgDACgAAJhBQgEACgCAFQgBAGACAEQADAFAFABQAFACAFgDQAFgDABgFQABgFgCgFQgDgEgFgCIgDAAQgEAAgDACg");
	this.shape.setTransform(20.9,21.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.9,42.1);


(lib.weel1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2001B").s().p("AAWSlQgTgbgYAAQgZABgTAaQgSAagEAoIg9gGQACgogPgdQgPgegZgDQgZgDgVAWQgWAWgKAmQghgHgcgIQAIgngLgeQgKgfgYgHQgWgIgaATQgZATgQAiQgjgOgWgLQAOgkgGgfQgFgfgXgLQgVgLgcAPQgbANgVAgQgWgNgggVQATgigBgfQAAgfgUgOQgTgOgeAJQgdAJgaAbQgUgRgbgXQAXgfAEgeQAEgggRgRQgRgQgeAEQgeAFgdAWQgVgXgUgYQAcgbAIgdQAJgegOgTQgPgUgeAAQgeAAggASQgRgYgRgdQAggWANgcQAOgcgMgWQgLgVgegFQgegFgjANQgLgYgNgiQAigQASgZQASgagIgYQgIgWgdgKQgegKgkAIQgIgegHgfQAlgLAWgXQAWgXgEgXQgEgZgdgOQgbgOgmACQgEgogBgXQAmgEAagSQAagUAAgYQgBgYgagSQgagSgmgDQACghACgeQApACAcgPQAdgOADgZQAEgZgXgXQgXgWgngKIAPg9QAnAKAggLQAfgKAIgYQAIgYgVgaQgUgbgmgPQAJgWAPgjQAmAPAigEQAhgFAMgXQALgXgRgeQgQgegkgVIAgg1QAkAXAjABQAiABAQgVQAQgWgNghQgNggghgaIAogxQAgAeAjAHQAjAHATgTQASgUgHgiQgIgjgfggQAagXAXgSQAaAjAjANQAiANAWgQQAWgQgDglQgDgkgagkQAcgTAagPIABABQAUAnAhAUQAgASAYgNQAZgMADglQACgmgVgoIAAgBIA6gZIACAFQAPAqAcAXQAdAYAbgIQAagKAIgkQAJgkgOgrIgCgEIA/gPIABAHQAHAsAZAcQAZAcAbgFQAcgEAOgjQANgjgHgsIgCgHQAmgEAcgBIgBAKQACAsAUAgQATAfAcAAQAagBATgfQAUgggBgtIgBgKQAlABAeAEIgDAMQgHAtAPAiQAQAiAbAEQAcAEAYgcQAYgdAGgsIABgMQAWAEAsALIgFAOQgOAqAKAlQAJAkAbAIQAaAJAdgZQAbgYANgrIAFgOIA+AZIgIAQQgUAnAEAmQADAlAZAMQAZAMAfgTQAggUAUgoIAHgOQAcAQAdATIgLAOQgaAlgCAlQgDAlAXARQAXAPAigOQAjgPAZgkIAJgPQAcAWAZAXIgPANQgfAggIAkQgIAlAUAUQAUATAkgJQAlgJAfggIALgNQAeAiAOASIgQALQgkAagNAkQgOAiAQAWQARAXAlgEQAmgDAjgaIAOgLQARAaASAgIgRAIQgoAVgTAgQgTAhANAYQANAYAlADQAlACAogUIAOgJQAOAeAMAhIgSAGQgqAOgYAdQgYAdAJAaQAJAaAkAJQAlAJAqgPIAPgGQALAsAEAWIgSACQgsAIgcAYQgcAZAGAbQAEAcAiAOQAjAOAsgHIAOgEIAFBEIgQgBQgtABgfAUQggAUAAAZQABAdAgATQAfATAtAAIANgBQgDAmgEAdIgNgDQgsgHgiAPQgjAPgDAbQgFAcAdAYQAcAYAsAGIALACQgHAfgJAhIgMgEQgqgNgkAJQgkAJgJAbQgIAaAZAdQAXAcArANIAIADIgaA7IgIgEQgogUgmAEQgkADgNAZQgMAaAUAfQATAgAoATIAFACQgRAdgSAaIgFgEQglgaglgBQglgDgQAWQgQAYAOAiQAPAiAlAaIABABQgYAdgTATIgCgCQgfgfglgJQglgHgTATQgTAUAIAkQAJAkAgAfIgyAoQgagkgjgNQgigNgWAQQgWAQACAkQADAkAZAjIg3AgQgVgngggRQgfgSgYANQgXAMgEAiQgDAjARAmQgbANgfALQgPgogcgWQgcgWgaAIQgYAJgKAhQgIAhALAnQgdAIggAGQgKgpgYgZQgXgZgaAFQgZAEgPAfQgOAdAEApIg/ADQgCgpgUgbgACcO4QhHBFhZAlQCxABCmg5QCog5CMhtQheAbhigMQhlgMhXgzQgnBehIBGgAlIFJQhxA7gmB6QgmB5A7BxQA8BxB5AmQB6AlBwg7QBvg7Amh6QAmh6g7hwQg8hxh3gmQgvgOguAAQhJAAhEAkgApSNqQg3hSgShgQgUhkAVhiQhkgIhagwQhXgtg/hMQA1CoBrCPQBpCNCTBlIAAAAgAHOA8Qh+AWhKBoQhJBoAWB9QAUB+BpBKQBnBJB+gVQB+gWBJhoQBKhngWh+QgVh+hohJQhQg5heAAQgbAAgcAEgAO2ioQgrBdhLBDQBNBAAsBaQAsBYAHBjQA3ipgCivQgCixg8inQgEBigpBZgAp3kqQiAAChZBbQhZBbACB+QACB/BaBZQBcBZB/gCQCAgBBZhbQBYhbgBiAQgCh+hbhYQhZhYh9AAIgEAAgAhriPQg7AsgMBLQgKBIAsA8QAtA8BKALQBIALA9gtQA8gsALhLQAKhIgsg8Qgtg9hKgKQgPgCgMAAQg5AAgxAkgAFBptQhnBMgSB/QgSB9BMBnQBMBmB+ASQB+ATBmhMQBmhNATh+QASh+hMhmQhMhmh/gSQgYgEgYAAQhhAAhSA9gAkrt1Qh5Aog4BzQg5ByApB4QApB5BzA5QBxA4B6gpQB2gpA4hyQA5hygph5Qgph4hwg5QhCghhFAAQgxAAgzASgAtephQhlCQgzCrQA9hOBXgwQBXgwBmgLQgYhiAQhkQARhhA1hTQiPBmhoCSgAgewfQBaAjBIBCQBLBFAoBcQBWg1BkgOQBigPBgAZQiShqing0QiagwifAAIgfABg");
	this.shape.setTransform(125.8,125.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251.5,251.5);


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// heartBeat
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2001B").s().p("ArHb+QkRgKkmgQIjwgPQg2jlgylVQhkqrAYoxQAhsVESm0QFWoiK+AnQG9AZEIEoQDTDtBVGOQA9EdgJFRQgECogRBuQMLAcC5GyQBECggWDGQgSCchACGQhvDmk3CdQkdCPmjBEQjTAimtAAQj1AAk9gLg");
	this.shape.setTransform(170.4,180.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2001B").s().p("ArBe4QkRgJkmgRIjvgPQg3jlgylVQhjqrAGrCQAGrFFNp7QFNp7JgARQJdASEJF7QEJF6AKGlQAJGkgIFRQgFCngQBvQMLAcC4GyQBECggWDGQgRCdhBCFQhvDnk3CcQkcCQmkBDQjTAimtAAQj1AAk9gLg");
	this.shape_1.setTransform(169.8,161.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2001B").s().p("ArEdbQkRgKkmgQIjwgPQg2jlgylVQhkqrAPp6QAUrsEwoYQFRpPKPAdQINAVEJFRQDuE0AvGZQAjFhgJFRQgECmgRBwQMLAcC5GyQBECggWDGQgSCchACGQhvDmk3CdQkdCPmjBEQjTAimtAAQj1AAk9gLg");
	this.shape_2.setTransform(170.1,170.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D42E28").s().p("AsCb+QkQgKkngQIjvgPQg3jlgylVQhjqrAXoxQAhsVESm0QFXoiK+AnQG9AZEIEoQDTDtBVGOQA8EdgIFRQgFCogQBuQL3gEC5EpQC5EpACDFQADDEiGDdQiGDdkCBxQkBBym5A2QkaAknLAAQkBAAk5gLg");
	this.shape_3.setTransform(176.3,180.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DB1722").s().p("Arkb+QkQgKkngQIjvgPQg3jlgylVQhjqrAXoxQAhsVESm0QFXoiK+AnQG9AZEIEoQDTDtBVGOQA8EdgIFRQgFCogQBuQMBAMC5FuQB+DkgJDGQgICwhjCxQh7DikcCHQkPCAmuA9Qj3Ajm7AAQj8AAk7gLg");
	this.shape_4.setTransform(173.3,180.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},12).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape}]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,340.9,360.2);


(lib.cloud_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E2001B").ss(6.8).p("AAQBrQgIhpgZhN");
	this.shape.setTransform(413,85.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E2001B").ss(6.8).p("AEcE/QgXlBjJhJQhDgZhcAEQgEAAh4AOQgShxguhb");
	this.shape_1.setTransform(386.1,64.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E2001B").ss(6.8).p("ALZHwQgYlDjJhJQhFgZhcAEQgDAAh4AOQgukPjKiYQi3iKjxAFQiZADh7A6");
	this.shape_2.setTransform(341.7,46.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E2001B").ss(6.8).p("APaHwQgYlDjJhJQhFgZhcAEQgDAAh4AOQgukPjMiYQi3iKjvAFQjvAEimCNQi1CagJD9QhlgYhegM");
	this.shape_3.setTransform(316,46.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E2001B").ss(6.8).p("AWtHwQgXlDjJhJQhFgZhcAEQgEAAh4AOQgukPjLiYQi4iKjxAFQjuAEikCNQi2CagJD9Ql8hZklBZQkHBSidDVQgTAagRAb");
	this.shape_4.setTransform(269.2,46.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E2001B").ss(6.8).p("AXwA6QgYlBjJhJQhFgZhcAEQgDAAh4AOQgukRjMiYQi3iKjxAFQjvAEikCNQi1CagJD/Ql8hbkmBbQkGBSidDVQiSDEgUEEQgVEBBtDoQgiAEgiAG");
	this.shape_5.setTransform(262.6,90.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E2001B").ss(6.8).p("Ab/iEQgXlCjJhJQhFgZhcAEQgEAAh4ANQgukQjLiZQi4iJjxAEQjuAFimCMQi2CagJD/Ql6haklBbQkHBRidDVQiRDGgVECQgUECBsDoQitAPiiBjQilBlh1CnQgJANgIAM");
	this.shape_6.setTransform(235.4,109.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E2001B").ss(6.8).p("AdgpNQgXlCjKhJQhEgZhcAEQgEAAh4ANQgukQjLiZQi4iJjxAEQjvAFimCMQi1CagJD/Ql6hakmBbQkGBRidDVQiSDGgUEEQgVEABtDoQiuAPihBjQimBlh1CnQh9CygvDhQgzD1AwERQgSABgRAC");
	this.shape_7.setTransform(225.8,155.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E2001B").ss(6.8).p("EAgZgOwQgYlDjJhJQhFgZhcAEQgDAAh4AOQgukRjMiYQi3iKjxAFQjvAEimCNQi1CagJD/Ql6hbkmBbQkGBSidDVQiSDGgUEEQgVEBBtDoQiuAQihBgQimBmh1CnQh9CygvDgQgzD1AwERQi2ANhyB4QhpBvgDCTQgECXBrBnQAsAqA6Ac");
	this.shape_8.setTransform(207.3,190.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E2001B").ss(6.8).p("EAgZgPJQgYlCjJhJQhFgZhcAEQgDAAh4ANQgukQjMiZQi3iJjxAEQjvAFimCMQi1CagJD/Ql6hakmBbQkGBRidDVQiSDGgUEEQgVECBtDoQiuAPihBjQimBjh1CnQh9CygvDhQgzD1AwERQi2ANhyB4QhpBugDCUQgECXBrBmQB3BzDbAEIIbAA");
	this.shape_9.setTransform(207.3,193.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E2001B").ss(6.8).p("EAgZgPJQgYlCjJhJQhFgZhcAEQgDAAh4ANQgukQjMiZQi3iJjxAEQjvAFimCMQi1CagJD/Ql6hakmBbQkGBRidDVQiSDGgUEEQgVECBtDoQiuAPihBjQimBjh1CnQh9CygvDhQgzD1AwERQi2ANhyB4QhpBugDCUQgECXBrBmQB3BzDbAEIV3AA");
	this.shape_10.setTransform(207.3,193.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E2001B").ss(6.8).p("EAgZgPJQgYlCjJhJQhFgZhcAEQgDAAh4ANQgukQjMiZQi3iJjxAEQjvAFimCMQi1CagJD/Ql6hakmBbQkGBRidDVQiSDGgUEEQgVECBtDoQiuAPihBjQimBjh1CnQh9CygvDhQgzD1AwERQi2ANhyB4QhpBugDCUQgECXBrBmQB3BzDbAEMAj5AAA");
	this.shape_11.setTransform(207.3,193.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#E2001B").ss(6.8).p("EAgZgPJQgYlCjJhJQhFgZhcAEQgDAAh4ANQgukQjMiZQi3iJjxAEQjvAFimCMQi1CagJD/Ql6hakmBbQkGBRidDVQiSDGgUEEQgVECBtDoQiuAPihBjQimBjh1CnQh9CygvDhQgzD1AwERQi2ANhyB4QhpBugDCUQgECXBrBmQB3BzDbAEMAu6AAA");
	this.shape_12.setTransform(207.3,193.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#E2001B").ss(6.8).p("EAgZgPJQgYlCjJhJQhFgZhcAEQgDAAh4ANQgukQjMiZQi3iJjxAEQjvAFimCMQi1CagJD/Ql6hakmBbQkGBRidDVQiSDGgUEEQgVECBtDoQiuAPihBjQimBjh1CnQh9CygvDhQgzD1AwERQi2ANhyB4QhpBugDCUQgECXBrBmQB3BzDbAEMA5aAAA");
	this.shape_13.setTransform(207.3,193.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.email_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D12E2E").s().p("AjmCeQgOAAgLgKQgKgLAAgOIAAkEQAAgPAIgEQAIgEAMAJIDSCdQANAKAOgBQAQABAMgKIDSidQAMgJAIAEQAIAEAAAPIAAEEQAAAOgKALQgLAKgOAAg");
	this.shape.setTransform(13.3,10.7,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D12E2E").s().p("AAABbQgSABgNgKIjAiWQgLgKACgGQACgGAPAAIGwAAQAOAAADAGQACAGgMAKIjACWQgMAJgRAAIgDAAg");
	this.shape_1.setTransform(13.3,4.6,0.5,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D12E2E").s().p("AgJBxIAAjhIATAAIAADhg");
	this.shape_2.setTransform(189.8,9.3,0.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D12E2E").s().p("AApBIIAAhMQAAgMgDgIQgBgJgEgHQgFgGgHgEQgHgDgMAAQgGAAgHADQgJAEgFAGQgHAIgDAJQgDALAAAMIAABIIgVAAIgBiLIATAAIACAZIABAAQAFgNAOgHQANgIANAAQAbAAANAPQAOARAAAZIAABVg");
	this.shape_3.setTransform(180.6,11.3,0.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D12E2E").s().p("AgKALQgEgFgBgGQABgEAEgGQAEgFAGAAQAGAAAFAFQAFAGAAAEQAAAGgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_4.setTransform(171.2,14.2,0.5,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D12E2E").s().p("AgYBDQgNgFgKgJQgKgLgFgNQgGgOABgPQgBgPAGgNQAFgMAKgMQAIgJAOgGQAOgGAMABQAQgBAOAGQALAGAJAJQAJAJAEANQAEAMAAAPIAAAIIhzAAQACALADAJQAEAJAHAHQAHAHAJAEQAJAEAJAAQAQAAAMgIQAMgHAFgKIAPANQgNAQgPAGQgPAIgRgBQgOABgNgHgAgQg0QgHAEgIAGQgGAIgEAIQgFAIAAAJIBeAAQgBgVgMgMQgLgNgXAAQgJAAgIADg");
	this.shape_5.setTransform(162,11.4,0.5,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D12E2E").s().p("AgTBDQgOgFgJgJQgKgLgFgNQgGgOAAgPQAAgOAGgOQAFgMAKgMQAJgJAOgGQAPgGAOABQAPgBAOAHQAPAGAJAMIgQAMQgFgJgKgFQgKgFgLAAQgLAAgKAEQgJAEgHAIQgHAHgEALQgEALAAAKQAAALAEAKQAEALAGAHQAHAHAKAGQAKAEAKAAQAMAAALgFQAJgFAGgJIAQAMQgJAMgNAFQgNAIgTgBQgOABgPgHg");
	this.shape_6.setTransform(151.2,11.4,0.5,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D12E2E").s().p("AgbBHQgIgCgIgGQgHgFgEgHQgFgJAAgMQAAgQAIgJQAJgIANgEQAPgFAPgCIAlgBIAAgEQAAgTgKgIQgIgJgTAAQgMAAgKAEQgKAFgIAHIgMgNQAKgJANgGQAPgFAQAAQAMgBAJAEQAKADAHAGQAHAGAFAKQAEAKAAAMIADBcIgTAAIgCgXIAAAAQgKAOgMAGQgNAGgOAAQgIABgJgDgAAHABQgKAAgLADQgLAFgGAFQgHAGAAAKQAAAGADAHQADAEAFAEQAEACAGACIAMABQAIAAAJgDQAKgFAEgFQAHgHACgIQADgJAAgJIAAgKg");
	this.shape_7.setTransform(140,11.4,0.5,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D12E2E").s().p("AgJBxIAAjhIATAAIAADhg");
	this.shape_8.setTransform(131.2,9.3,0.5,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D12E2E").s().p("AgYBDQgNgFgKgJQgKgLgFgNQgGgNAAgQQABgPAFgNQAFgMAKgMQAJgJANgGQAOgGAMABQAQgBANAGQANAGAIAJQAIAJAFANQAEAMABAPIgBAIIhyAAQAAAMAEAIQAEAJAGAHQAHAGAKAFQAJAEAJAAQAQAAAMgIQALgHAGgKIAPANQgNAQgPAGQgPAIgRgBQgNABgOgHgAgQg0QgHAEgIAGQgGAIgFAIQgEAIAAAJIBdAAQgBgVgLgMQgMgNgWAAQgJAAgIADg");
	this.shape_9.setTransform(122.1,11.4,0.5,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D12E2E").s().p("AgKBGIg5iLIAXAAIAsB1IAAAAIAuh1IAWAAIg5CLg");
	this.shape_10.setTransform(111.1,11.4,0.5,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D12E2E").s().p("AgdBDQgOgFgJgJQgKgLgGgNQgFgOAAgPQAAgOAFgOQAGgNAKgLQAJgJAOgGQAPgGAOABQAQgBAOAGQAOAGAJAJQALALAFANQAFANAAAPQAAAQgFANQgFANgLALQgJAJgOAFQgOAHgQgBQgOABgPgHgAgVgzQgKAGgGAGQgHAIgEAKQgEALAAAKQAAAKAEALQAEALAHAHQAHAIAJAFQAKAEALAAQAMAAAKgEQAKgFAGgIQAHgGAEgMQAEgJAAgMQAAgLgEgKQgEgKgHgIQgGgGgKgGQgJgEgNAAQgMAAgJAEg");
	this.shape_11.setTransform(99.8,11.4,0.5,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D12E2E").s().p("AgJBxIAAjhIATAAIAADhg");
	this.shape_12.setTransform(90.3,9.3,0.5,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D12E2E").s().p("AgqBnQgUgIgQgPQgPgPgHgUQgJgWAAgXQAAgWAJgVQAJgVAPgOQARgQAUgIQAUgIAWAAQAWAAASAGQAUAGAPAMQAOANAJARQAJASAAAYQAAAPgFAPQgEANgJAKQgHAJgLAFQgKAFgMgBQgOABgGgHQgGgGAAgJIgBAAIgGAHIgIAHIgLAFQgDACgIAAQgLABgHgEQgJgEgFgGQgFgGgEgKQgCgJAAgLQAAgMADgLQAGgMAHgJQAHgJALgGQAMgGALAAQAMAAAIAFQAIAFADAIIABAAIADgNIATAAIgPBIIAAAFIAAAFIACAGIAFADQACABAFAAQAJAAAFgEQAGgEAEgHQAEgGAEgLQABgIAAgMQABgTgHgPQgGgPgMgKQgLgKgQgGQgPgEgUAAQgSAAgRAGQgRAIgMANQgMAMgHASQgGAQgBASQAAAVAHASQAHARANAMQANAMAQAHQARAGAUAAQAbAAATgIQATgIAQgPIALANQgSATgYAIQgXAJgeAAQgXAAgWgIgAgMgiQgGAEgGAHQgEAIgDAJQgCAGAAAJIABAKQABAFADAFQACAEAFAEQAFADAHAAQAJAAAHgFQAGgEAFgJQAEgGADgKQACgGAAgIIgBgLIgEgLQgEgEgEgCQgFgDgHAAQgHAAgHAFg");
	this.shape_13.setTransform(79.5,9.6,0.5,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D12E2E").s().p("AgdBDQgNgFgKgJQgLgLgFgNQgFgNgBgQQABgOAFgOQAFgMALgMQAKgKANgFQAOgGAPABQAQgBAOAGQAOAGAKAJQAJALAGANQAFAOABAOQgBAPgFAOQgGANgJALQgKAKgOAEQgOAHgQgBQgPABgOgHgAgVgzQgJAGgIAGQgGAIgEAKQgEAKABALQgBAMAEAJQAEALAGAHQAIAIAJAFQALAEAKAAQAMAAAJgEQALgGAGgHQAHgHAEgLQAEgLAAgKQAAgKgEgLQgEgKgHgIQgFgGgMgGQgIgEgNAAQgMAAgJAEg");
	this.shape_14.setTransform(65.8,11.4,0.5,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D12E2E").s().p("AgQBzIAAh5IgeAAIAAgSIAeAAIAAgmQAAgXAMgPQAKgOAYAAIAIABIAJACIgEASIgGgCIgIgBQgIAAgGADQgDACgFAGIgEALIAAAyIAhAAIAAASIghAAIAAB5g");
	this.shape_15.setTransform(56.3,9.2,0.5,0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D12E2E").s().p("AAoBIIAAhMQAAgLgBgJQgDgKgEgGQgEgGgHgEQgHgDgMAAQgGAAgHADQgJAEgFAGQgFAGgFALQgDAKAAANIAABIIgVAAIgBiLIAUAAIABAZIAAAAQAGgNAOgHQANgIANAAQAbAAANAPQAOARAAAZIAABVg");
	this.shape_16.setTransform(46.4,11.3,0.5,0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D12E2E").s().p("AgJBoIAAiLIATAAIAACLgAgIhOQgFgEAAgGQAAgHAFgEQAEgEAEAAQAFAAAEAEQAFAEAAAHQAAAGgFAEQgEAEgFAAQgEAAgEgEg");
	this.shape_17.setTransform(37.2,9.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// BG
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AxkD0IAAnnMAjJAAAIAAHng");
	this.shape_18.setTransform(96.8,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-13.8,225.2,48.9);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud_line();
	this.instance.setTransform(210.8,195.2,1,1,0,0,0,210.8,195.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:207.3,regY:193.1,x:207.3,y:193.1},0).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.weel7();
	this.instance.setTransform(27.1,27.1,1,1,0,0,0,27.1,27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.8,y:27.2},0).wait(1).to({rotation:7.6,y:27.1},0).wait(1).to({rotation:11.4},0).wait(1).to({rotation:15.2,y:27.2},0).wait(1).to({rotation:18.9},0).wait(1).to({rotation:22.7,y:27.1},0).wait(1).to({rotation:26.5},0).wait(1).to({rotation:30.3,y:27.2},0).wait(1).to({rotation:34.1},0).wait(1).to({rotation:37.9},0).wait(1).to({rotation:41.7,y:27.1},0).wait(1).to({rotation:45.5},0).wait(1).to({rotation:49.3,y:27.2},0).wait(1).to({rotation:53.1},0).wait(1).to({rotation:56.8,y:27.1},0).wait(1).to({rotation:60.6},0).wait(1).to({rotation:64.4,y:27.2},0).wait(1).to({rotation:68.2,y:27.1},0).wait(1).to({rotation:72},0).wait(1).to({rotation:75.8},0).wait(1).to({rotation:79.6},0).wait(1).to({rotation:83.4,y:27.2},0).wait(1).to({rotation:87.2,y:27.1},0).wait(1).to({rotation:90.9},0).wait(1).to({rotation:94.7},0).wait(1).to({rotation:98.5},0).wait(1).to({rotation:102.3},0).wait(1).to({rotation:106.1},0).wait(1).to({rotation:109.9},0).wait(1).to({rotation:113.7},0).wait(1).to({rotation:117.5},0).wait(1).to({rotation:121.3},0).wait(1).to({rotation:125.1},0).wait(1).to({rotation:128.8},0).wait(1).to({rotation:132.6},0).wait(1).to({rotation:136.4},0).wait(1).to({rotation:140.2},0).wait(1).to({rotation:144},0).wait(1).to({rotation:147.8},0).wait(1).to({rotation:151.6},0).wait(1).to({rotation:155.4},0).wait(1).to({rotation:159.2},0).wait(1).to({rotation:162.9},0).wait(1).to({rotation:166.7},0).wait(1).to({rotation:170.5},0).wait(1).to({rotation:174.3},0).wait(1).to({rotation:178.1},0).wait(1).to({rotation:181.9},0).wait(1).to({rotation:185.7},0).wait(1).to({rotation:189.5},0).wait(1).to({rotation:193.3},0).wait(1).to({rotation:197.1},0).wait(1).to({rotation:200.8},0).wait(1).to({rotation:204.6},0).wait(1).to({rotation:208.4},0).wait(1).to({rotation:212.2},0).wait(1).to({rotation:216},0).wait(1).to({rotation:219.8},0).wait(1).to({rotation:223.6},0).wait(1).to({rotation:227.4},0).wait(1).to({rotation:231.2},0).wait(1).to({rotation:234.9},0).wait(1).to({rotation:238.7},0).wait(1).to({rotation:242.5},0).wait(1).to({rotation:246.3},0).wait(1).to({rotation:250.1},0).wait(1).to({rotation:253.9},0).wait(1).to({rotation:257.7},0).wait(1).to({rotation:261.5},0).wait(1).to({rotation:265.3},0).wait(1).to({rotation:269.1},0).wait(1).to({rotation:272.8},0).wait(1).to({rotation:276.6,x:27.2},0).wait(1).to({rotation:280.4,x:27.1},0).wait(1).to({rotation:284.2},0).wait(1).to({rotation:288},0).wait(1).to({rotation:291.8},0).wait(1).to({rotation:295.6,x:27.2},0).wait(1).to({rotation:299.4,x:27.1},0).wait(1).to({rotation:303.2},0).wait(1).to({rotation:306.9,x:27.2},0).wait(1).to({rotation:310.7},0).wait(1).to({rotation:314.5,x:27.1},0).wait(1).to({rotation:318.3},0).wait(1).to({rotation:322.1,x:27.2},0).wait(1).to({rotation:325.9},0).wait(1).to({rotation:329.7},0).wait(1).to({rotation:333.5,x:27.1},0).wait(1).to({rotation:337.3},0).wait(1).to({rotation:341.1,x:27.2},0).wait(1).to({rotation:344.8},0).wait(1).to({rotation:348.6,x:27.1},0).wait(1).to({rotation:352.4},0).wait(1).to({rotation:356.2,x:27.2},0).wait(1).to({rotation:360,x:27.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.2,54.2);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.weel6();
	this.instance.setTransform(29.2,29.2,1,1,0,0,0,29.2,29.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:29.3,regY:29.3,rotation:3.8,x:29.3,y:29.4},0).wait(1).to({rotation:7.6,y:29.3},0).wait(1).to({rotation:11.4,y:29.4},0).wait(1).to({rotation:15.2},0).wait(1).to({rotation:18.9,y:29.3},0).wait(1).to({rotation:22.7},0).wait(1).to({rotation:26.5,x:29.2,y:29.4},0).wait(1).to({rotation:30.3,x:29.3},0).wait(1).to({rotation:34.1,x:29.2},0).wait(1).to({rotation:37.9},0).wait(1).to({rotation:41.7,x:29.3},0).wait(1).to({rotation:45.5,x:29.2},0).wait(1).to({rotation:49.3,y:29.3},0).wait(1).to({rotation:53.1},0).wait(1).to({rotation:56.8,y:29.4},0).wait(1).to({rotation:60.6},0).wait(1).to({rotation:64.4},0).wait(1).to({rotation:68.2,x:29.3},0).wait(1).to({rotation:72,x:29.2,y:29.3},0).wait(1).to({rotation:75.8,y:29.4},0).wait(1).to({rotation:79.6,y:29.3},0).wait(1).to({rotation:83.4,y:29.4},0).wait(1).to({rotation:87.2,y:29.3},0).wait(1).to({rotation:90.9},0).wait(1).to({rotation:94.7},0).wait(1).to({rotation:98.5},0).wait(1).to({rotation:102.3},0).wait(1).to({rotation:106.1},0).wait(1).to({rotation:109.9},0).wait(1).to({rotation:113.7},0).wait(1).to({rotation:117.5},0).wait(1).to({rotation:121.3},0).wait(1).to({rotation:125.1,x:29.1},0).wait(1).to({rotation:128.8,x:29.2,y:29.2},0).wait(1).to({rotation:132.6},0).wait(1).to({rotation:136.4},0).wait(1).to({rotation:140.2,y:29.3},0).wait(1).to({rotation:144,y:29.2},0).wait(1).to({rotation:147.8},0).wait(1).to({rotation:151.6,y:29.3},0).wait(1).to({rotation:155.4,y:29.2},0).wait(1).to({rotation:159.2},0).wait(1).to({rotation:162.9},0).wait(1).to({rotation:166.7},0).wait(1).to({rotation:170.5},0).wait(1).to({rotation:174.3},0).wait(1).to({rotation:178.1},0).wait(1).to({rotation:181.9},0).wait(1).to({rotation:185.7},0).wait(1).to({rotation:189.5},0).wait(1).to({rotation:193.3},0).wait(1).to({rotation:197.1},0).wait(1).to({rotation:200.8},0).wait(1).to({rotation:204.6},0).wait(1).to({rotation:208.4,x:29.3},0).wait(1).to({rotation:212.2,x:29.2},0).wait(1).to({rotation:216},0).wait(1).to({rotation:219.8,x:29.3},0).wait(1).to({rotation:223.6,x:29.2},0).wait(1).to({rotation:227.4},0).wait(1).to({rotation:231.2},0).wait(1).to({rotation:234.9,x:29.3,y:29.1},0).wait(1).to({rotation:238.7,y:29.2},0).wait(1).to({rotation:242.5},0).wait(1).to({rotation:246.3},0).wait(1).to({rotation:250.1},0).wait(1).to({rotation:253.9},0).wait(1).to({rotation:257.7},0).wait(1).to({rotation:261.5},0).wait(1).to({rotation:265.3},0).wait(1).to({rotation:269.1},0).wait(1).to({rotation:272.8},0).wait(1).to({rotation:276.6,x:29.4},0).wait(1).to({rotation:280.4,x:29.3},0).wait(1).to({rotation:284.2,x:29.4},0).wait(1).to({rotation:288,x:29.3},0).wait(1).to({rotation:291.8,x:29.4,y:29.3},0).wait(1).to({rotation:295.6,y:29.2},0).wait(1).to({rotation:299.4},0).wait(1).to({rotation:303.2},0).wait(1).to({rotation:306.9,x:29.3},0).wait(1).to({rotation:310.7},0).wait(1).to({rotation:314.5,x:29.4},0).wait(1).to({rotation:318.3,y:29.3},0).wait(1).to({rotation:322.1,y:29.2},0).wait(1).to({rotation:325.9},0).wait(1).to({rotation:329.7,y:29.3},0).wait(1).to({rotation:333.5,y:29.2},0).wait(1).to({rotation:337.3,x:29.3,y:29.3},0).wait(1).to({rotation:341.1},0).wait(1).to({rotation:344.8,x:29.4},0).wait(1).to({rotation:348.6},0).wait(1).to({rotation:352.4,x:29.3},0).wait(1).to({rotation:356.2,x:29.4},0).wait(1).to({rotation:360,x:29.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.6,58.6);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.weel5();
	this.instance.setTransform(89.4,90,1,1,0,0,0,89.4,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-5,x:89.5},0).wait(1).to({rotation:-7.6},0).wait(1).to({rotation:-10.1,x:89.4},0).wait(1).to({rotation:-12.6},0).wait(1).to({rotation:-15.1},0).wait(1).to({rotation:-17.6,x:89.5},0).wait(1).to({rotation:-20.1},0).wait(1).to({rotation:-22.7,x:89.4},0).wait(1).to({rotation:-25.2,x:89.5},0).wait(1).to({rotation:-27.7,x:89.4},0).wait(1).to({rotation:-30.2,x:89.5},0).wait(1).to({rotation:-32.7},0).wait(1).to({rotation:-35.2},0).wait(1).to({rotation:-37.8},0).wait(1).to({rotation:-40.3},0).wait(1).to({rotation:-42.8},0).wait(1).to({rotation:-45.3},0).wait(1).to({rotation:-47.8},0).wait(1).to({rotation:-50.3},0).wait(1).to({rotation:-52.9},0).wait(1).to({rotation:-55.4},0).wait(1).to({rotation:-57.9,y:89.9},0).wait(1).to({rotation:-60.4,y:90},0).wait(1).to({rotation:-62.9},0).wait(1).to({rotation:-65.5},0).wait(1).to({rotation:-68},0).wait(1).to({rotation:-70.5},0).wait(1).to({rotation:-73},0).wait(1).to({rotation:-75.5},0).wait(1).to({rotation:-78},0).wait(1).to({rotation:-80.6,y:89.9},0).wait(1).to({rotation:-83.1,y:90},0).wait(1).to({rotation:-85.6,y:89.9},0).wait(1).to({rotation:-88.1},0).wait(1).to({rotation:-90.6,x:89.4},0).wait(1).to({rotation:-93.1,y:90},0).wait(1).to({rotation:-95.7,x:89.5,y:89.9},0).wait(1).to({rotation:-98.2},0).wait(1).to({rotation:-100.7},0).wait(1).to({rotation:-103.2,x:89.4},0).wait(1).to({rotation:-105.7,x:89.5},0).wait(1).to({rotation:-108.3,x:89.4},0).wait(1).to({rotation:-110.8},0).wait(1).to({rotation:-113.3},0).wait(1).to({rotation:-115.8,x:89.5},0).wait(1).to({rotation:-118.3},0).wait(1).to({rotation:-120.8,x:89.4},0).wait(1).to({rotation:-123.4},0).wait(1).to({rotation:-125.9,x:89.5},0).wait(1).to({rotation:-128.4},0).wait(1).to({rotation:-130.9,x:89.4},0).wait(1).to({rotation:-133.4},0).wait(1).to({rotation:-135.9,x:89.5},0).wait(1).to({rotation:-138.5},0).wait(1).to({rotation:-141,x:89.4},0).wait(1).to({rotation:-143.5,x:89.5},0).wait(1).to({rotation:-146,x:89.4,y:90},0).wait(1).to({rotation:-148.5,y:89.9},0).wait(1).to({rotation:-151},0).wait(1).to({rotation:-153.6},0).wait(1).to({rotation:-156.1,x:89.5},0).wait(1).to({rotation:-158.6,x:89.4},0).wait(1).to({rotation:-161.1},0).wait(1).to({rotation:-163.6},0).wait(1).to({rotation:-166.2},0).wait(1).to({rotation:-168.7},0).wait(1).to({rotation:-171.2},0).wait(1).to({rotation:-173.7},0).wait(1).to({rotation:-176.2},0).wait(1).to({rotation:-178.7},0).wait(1).to({rotation:-181.3},0).wait(1).to({rotation:-183.8},0).wait(1).to({rotation:-186.3},0).wait(1).to({rotation:-188.8},0).wait(1).to({rotation:-191.3},0).wait(1).to({rotation:-193.8},0).wait(1).to({rotation:-196.4},0).wait(1).to({rotation:-198.9},0).wait(1).to({rotation:-201.4},0).wait(1).to({rotation:-203.9},0).wait(1).to({rotation:-206.4},0).wait(1).to({rotation:-209},0).wait(1).to({rotation:-211.5},0).wait(1).to({rotation:-214},0).wait(1).to({rotation:-216.5},0).wait(1).to({rotation:-219},0).wait(1).to({rotation:-221.5},0).wait(1).to({rotation:-224.1,x:89.3},0).wait(1).to({rotation:-226.6,x:89.4,y:90},0).wait(1).to({rotation:-229.1,y:89.9},0).wait(1).to({rotation:-231.6},0).wait(1).to({rotation:-234.1,x:89.3},0).wait(1).to({rotation:-236.6,x:89.4},0).wait(1).to({rotation:-239.2},0).wait(1).to({rotation:-241.7,x:89.3},0).wait(1).to({rotation:-244.2},0).wait(1).to({rotation:-246.7,x:89.4},0).wait(1).to({rotation:-249.2,y:90},0).wait(1).to({rotation:-251.7,y:89.9},0).wait(1).to({rotation:-254.3,x:89.3},0).wait(1).to({rotation:-256.8,x:89.4},0).wait(1).to({rotation:-259.3,x:89.3,y:90},0).wait(1).to({rotation:-261.8,x:89.4},0).wait(1).to({rotation:-264.3,y:89.9},0).wait(1).to({rotation:-266.9},0).wait(1).to({rotation:-269.4,x:89.3},0).wait(1).to({rotation:-271.9,x:89.4,y:90},0).wait(1).to({rotation:-274.4,x:89.3},0).wait(1).to({rotation:-276.9,x:89.4},0).wait(1).to({rotation:-279.4,x:89.3},0).wait(1).to({rotation:-282},0).wait(1).to({rotation:-284.5},0).wait(1).to({rotation:-287,x:89.4},0).wait(1).to({rotation:-289.5,x:89.3},0).wait(1).to({rotation:-292,x:89.4},0).wait(1).to({rotation:-294.5},0).wait(1).to({rotation:-297.1,x:89.3},0).wait(1).to({rotation:-299.6,x:89.4},0).wait(1).to({rotation:-302.1,x:89.3},0).wait(1).to({rotation:-304.6,x:89.4},0).wait(1).to({rotation:-307.1,x:89.3},0).wait(1).to({rotation:-309.7,x:89.4,y:90.1},0).wait(1).to({rotation:-312.2,y:90},0).wait(1).to({rotation:-314.7,x:89.3},0).wait(1).to({rotation:-317.2,x:89.4,y:90.1},0).wait(1).to({rotation:-319.7,y:90},0).wait(1).to({rotation:-322.2},0).wait(1).to({rotation:-324.8,x:89.3},0).wait(1).to({rotation:-327.3,x:89.4},0).wait(1).to({rotation:-329.8,y:90.1},0).wait(1).to({rotation:-332.3},0).wait(1).to({rotation:-334.8},0).wait(1).to({rotation:-337.3},0).wait(1).to({rotation:-339.9},0).wait(1).to({rotation:-342.4},0).wait(1).to({rotation:-344.9},0).wait(1).to({rotation:-347.4},0).wait(1).to({rotation:-349.9},0).wait(1).to({rotation:-352.4,x:89.3,y:90},0).wait(1).to({rotation:-355,x:89.4,y:90.1},0).wait(1).to({rotation:-357.5},0).wait(1).to({rotation:-360,y:90},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178.8,179.9);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.weel4();
	this.instance.setTransform(67.2,67.2,1,1,0,0,0,67.2,67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.8,y:67.3},0).wait(1).to({rotation:7.6,y:67.2},0).wait(1).to({rotation:11.4,y:67.3},0).wait(1).to({rotation:15.2,y:67.2},0).wait(1).to({rotation:18.9},0).wait(1).to({rotation:22.7},0).wait(1).to({rotation:26.5},0).wait(1).to({rotation:30.3},0).wait(1).to({rotation:34.1},0).wait(1).to({rotation:37.9,y:67.3},0).wait(1).to({rotation:41.7,y:67.2},0).wait(1).to({rotation:45.5},0).wait(1).to({rotation:49.3},0).wait(1).to({rotation:53.1},0).wait(1).to({rotation:56.8},0).wait(1).to({rotation:60.6},0).wait(1).to({rotation:64.4},0).wait(1).to({rotation:68.2},0).wait(1).to({rotation:72},0).wait(1).to({rotation:75.8},0).wait(1).to({rotation:79.6},0).wait(1).to({rotation:83.4},0).wait(1).to({rotation:87.2,x:67.3},0).wait(1).to({rotation:90.9},0).wait(1).to({rotation:94.7,y:67.1},0).wait(1).to({rotation:98.5,y:67.2},0).wait(1).to({rotation:102.3,x:67.2,y:67.1},0).wait(1).to({rotation:106.1,x:67.3},0).wait(1).to({rotation:109.9,y:67.2},0).wait(1).to({rotation:113.7},0).wait(1).to({rotation:117.5,y:67.1},0).wait(1).to({rotation:121.3,y:67.2},0).wait(1).to({rotation:125.1,y:67.1},0).wait(1).to({rotation:128.8,y:67.2},0).wait(1).to({rotation:132.6},0).wait(1).to({rotation:136.4,y:67.1},0).wait(1).to({rotation:140.2},0).wait(1).to({rotation:144,y:67.2},0).wait(1).to({rotation:147.8},0).wait(1).to({rotation:151.6},0).wait(1).to({rotation:155.4},0).wait(1).to({rotation:159.2},0).wait(1).to({rotation:162.9},0).wait(1).to({rotation:166.7},0).wait(1).to({rotation:170.5},0).wait(1).to({rotation:174.3},0).wait(1).to({rotation:178.1},0).wait(1).to({rotation:181.9},0).wait(1).to({rotation:185.7},0).wait(1).to({rotation:189.5},0).wait(1).to({rotation:193.3},0).wait(1).to({rotation:197.1},0).wait(1).to({rotation:200.8},0).wait(1).to({rotation:204.6},0).wait(1).to({rotation:208.4},0).wait(1).to({rotation:212.2,y:67.3},0).wait(1).to({rotation:216,y:67.2},0).wait(1).to({rotation:219.8},0).wait(1).to({rotation:223.6,x:67.2},0).wait(1).to({rotation:227.4,x:67.3},0).wait(1).to({rotation:231.2},0).wait(1).to({rotation:234.9},0).wait(1).to({rotation:238.7,y:67.3},0).wait(1).to({rotation:242.5},0).wait(1).to({rotation:246.3,y:67.2},0).wait(1).to({rotation:250.1,y:67.3},0).wait(1).to({rotation:253.9,x:67.2},0).wait(1).to({rotation:257.7,y:67.2},0).wait(1).to({rotation:261.5,x:67.3,y:67.3},0).wait(1).to({rotation:265.3,x:67.2},0).wait(1).to({rotation:269.1,x:67.3},0).wait(1).to({rotation:272.8},0).wait(1).to({rotation:276.6,y:67.2},0).wait(1).to({rotation:280.4},0).wait(1).to({rotation:284.2},0).wait(1).to({rotation:288},0).wait(1).to({rotation:291.8,y:67.3},0).wait(1).to({rotation:295.6,y:67.2},0).wait(1).to({rotation:299.4,y:67.3},0).wait(1).to({rotation:303.2,y:67.2},0).wait(1).to({rotation:306.9,y:67.3},0).wait(1).to({rotation:310.7,x:67.2},0).wait(1).to({rotation:314.5,y:67.2},0).wait(1).to({rotation:318.3,x:67.3},0).wait(1).to({rotation:322.1},0).wait(1).to({rotation:325.9},0).wait(1).to({rotation:329.7,x:67.2},0).wait(1).to({rotation:333.5},0).wait(1).to({rotation:337.3,x:67.3,y:67.3},0).wait(1).to({rotation:341.1,x:67.2,y:67.2},0).wait(1).to({rotation:344.8},0).wait(1).to({rotation:348.6,x:67.3},0).wait(1).to({rotation:352.4,x:67.2},0).wait(1).to({rotation:356.2,x:67.3},0).wait(1).to({rotation:360,x:67.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134.5,134.5);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.weel3();
	this.instance.setTransform(52.3,52.5,1,1,0,0,0,52.3,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-3.8},0).wait(1).to({rotation:-7.6},0).wait(1).to({rotation:-11.4},0).wait(1).to({rotation:-15.2,x:52.4},0).wait(1).to({rotation:-18.9,x:52.3},0).wait(1).to({rotation:-22.7,x:52.4},0).wait(1).to({rotation:-26.5},0).wait(1).to({rotation:-30.3},0).wait(1).to({rotation:-34.1},0).wait(1).to({rotation:-37.9,x:52.3},0).wait(1).to({rotation:-41.7},0).wait(1).to({rotation:-45.5},0).wait(1).to({rotation:-49.3,x:52.4},0).wait(1).to({rotation:-53.1},0).wait(1).to({rotation:-56.8,x:52.3},0).wait(1).to({rotation:-60.6},0).wait(1).to({rotation:-64.4,x:52.4},0).wait(1).to({rotation:-68.2,x:52.3},0).wait(1).to({rotation:-72,x:52.4},0).wait(1).to({rotation:-75.8},0).wait(1).to({rotation:-79.6},0).wait(1).to({rotation:-83.4},0).wait(1).to({rotation:-87.2},0).wait(1).to({rotation:-90.9,x:52.3},0).wait(1).to({rotation:-94.7},0).wait(1).to({rotation:-98.5},0).wait(1).to({rotation:-102.3},0).wait(1).to({rotation:-106.1},0).wait(1).to({rotation:-109.9},0).wait(1).to({rotation:-113.7},0).wait(1).to({rotation:-117.5},0).wait(1).to({rotation:-121.3},0).wait(1).to({rotation:-125.1},0).wait(1).to({rotation:-128.8},0).wait(1).to({rotation:-132.6},0).wait(1).to({rotation:-136.4},0).wait(1).to({rotation:-140.2},0).wait(1).to({rotation:-144},0).wait(1).to({rotation:-147.8},0).wait(1).to({rotation:-151.6},0).wait(1).to({rotation:-155.4},0).wait(1).to({rotation:-159.2},0).wait(1).to({rotation:-162.9},0).wait(1).to({rotation:-166.7},0).wait(1).to({rotation:-170.5},0).wait(1).to({rotation:-174.3},0).wait(1).to({rotation:-178.1},0).wait(1).to({rotation:-181.9},0).wait(1).to({rotation:-185.7},0).wait(1).to({rotation:-189.5},0).wait(1).to({rotation:-193.3},0).wait(1).to({rotation:-197.1},0).wait(1).to({rotation:-200.8},0).wait(1).to({rotation:-204.6},0).wait(1).to({rotation:-208.4},0).wait(1).to({rotation:-212.2},0).wait(1).to({rotation:-216},0).wait(1).to({rotation:-219.8},0).wait(1).to({rotation:-223.6},0).wait(1).to({rotation:-227.4},0).wait(1).to({rotation:-231.2},0).wait(1).to({rotation:-234.9},0).wait(1).to({rotation:-238.7},0).wait(1).to({rotation:-242.5},0).wait(1).to({rotation:-246.3},0).wait(1).to({rotation:-250.1},0).wait(1).to({rotation:-253.9},0).wait(1).to({rotation:-257.7},0).wait(1).to({rotation:-261.5},0).wait(1).to({rotation:-265.3},0).wait(1).to({rotation:-269.1},0).wait(1).to({rotation:-272.8,y:52.6},0).wait(1).to({rotation:-276.6,y:52.5},0).wait(1).to({rotation:-280.4,y:52.6},0).wait(1).to({rotation:-284.2},0).wait(1).to({rotation:-288,y:52.5},0).wait(1).to({rotation:-291.8},0).wait(1).to({rotation:-295.6},0).wait(1).to({rotation:-299.4,y:52.6},0).wait(1).to({rotation:-303.2},0).wait(1).to({rotation:-306.9,y:52.5},0).wait(1).to({rotation:-310.7,y:52.6},0).wait(1).to({rotation:-314.5,y:52.5},0).wait(1).to({rotation:-318.3,y:52.6},0).wait(1).to({rotation:-322.1,y:52.5},0).wait(1).to({rotation:-325.9,y:52.6},0).wait(1).to({rotation:-329.7,y:52.5},0).wait(1).to({rotation:-333.5},0).wait(1).to({rotation:-337.3},0).wait(1).to({rotation:-341.1,y:52.6},0).wait(1).to({rotation:-344.8},0).wait(1).to({rotation:-348.6,y:52.5},0).wait(1).to({rotation:-352.4,y:52.6},0).wait(1).to({rotation:-356.2},0).wait(1).to({rotation:-360,y:52.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.6,105);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.weel2();
	this.instance.setTransform(20.9,21.1,1,1,0,0,0,20.9,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.8,y:21.2},0).wait(1).to({rotation:7.6,y:21.1},0).wait(1).to({rotation:11.4},0).wait(1).to({rotation:15.2},0).wait(1).to({rotation:18.9,y:21.2},0).wait(1).to({rotation:22.7},0).wait(1).to({rotation:26.5},0).wait(1).to({rotation:30.3,y:21.1},0).wait(1).to({rotation:34.1,x:20.8},0).wait(1).to({rotation:37.9,x:20.9,y:21.2},0).wait(1).to({rotation:41.7,x:20.8,y:21.1},0).wait(1).to({rotation:45.5,x:20.9},0).wait(1).to({rotation:49.3},0).wait(1).to({rotation:53.1},0).wait(1).to({rotation:56.8},0).wait(1).to({rotation:60.6,x:20.8},0).wait(1).to({rotation:64.4},0).wait(1).to({rotation:68.2},0).wait(1).to({rotation:72,x:20.9},0).wait(1).to({rotation:75.8},0).wait(1).to({rotation:79.6},0).wait(1).to({rotation:83.4,x:20.8},0).wait(1).to({rotation:87.2,x:20.9},0).wait(1).to({rotation:90.9,x:20.8},0).wait(1).to({rotation:94.7},0).wait(1).to({rotation:98.5,x:20.9,y:21},0).wait(1).to({rotation:102.3},0).wait(1).to({rotation:106.1,y:21.1},0).wait(1).to({rotation:109.9,y:21},0).wait(1).to({rotation:113.7},0).wait(1).to({rotation:117.5},0).wait(1).to({rotation:121.3,x:20.8},0).wait(1).to({rotation:125.1,x:20.9},0).wait(1).to({rotation:128.8},0).wait(1).to({rotation:132.6},0).wait(1).to({rotation:136.4},0).wait(1).to({rotation:140.2},0).wait(1).to({rotation:144},0).wait(1).to({rotation:147.8},0).wait(1).to({rotation:151.6,x:20.8},0).wait(1).to({rotation:155.4,x:20.9},0).wait(1).to({rotation:159.2},0).wait(1).to({rotation:162.9},0).wait(1).to({rotation:166.7},0).wait(1).to({rotation:170.5},0).wait(1).to({rotation:174.3},0).wait(1).to({rotation:178.1},0).wait(1).to({rotation:181.9},0).wait(1).to({rotation:185.7},0).wait(1).to({rotation:189.5},0).wait(1).to({rotation:193.3},0).wait(1).to({rotation:197.1},0).wait(1).to({rotation:200.8},0).wait(1).to({rotation:204.6},0).wait(1).to({rotation:208.4},0).wait(1).to({rotation:212.2},0).wait(1).to({rotation:216},0).wait(1).to({rotation:219.8},0).wait(1).to({rotation:223.6},0).wait(1).to({rotation:227.4},0).wait(1).to({rotation:231.2,x:21},0).wait(1).to({rotation:234.9,x:20.9},0).wait(1).to({rotation:238.7,x:21},0).wait(1).to({rotation:242.5,x:20.9},0).wait(1).to({rotation:246.3},0).wait(1).to({rotation:250.1,x:21},0).wait(1).to({rotation:253.9,x:20.9},0).wait(1).to({rotation:257.7,y:21.1},0).wait(1).to({rotation:261.5,y:21},0).wait(1).to({rotation:265.3},0).wait(1).to({rotation:269.1},0).wait(1).to({rotation:272.8,x:21,y:21.1},0).wait(1).to({rotation:276.6},0).wait(1).to({rotation:280.4,y:21},0).wait(1).to({rotation:284.2,y:21.1},0).wait(1).to({rotation:288,y:21},0).wait(1).to({rotation:291.8,y:21.1},0).wait(1).to({rotation:295.6},0).wait(1).to({rotation:299.4},0).wait(1).to({rotation:303.2},0).wait(1).to({rotation:306.9},0).wait(1).to({rotation:310.7,y:21},0).wait(1).to({rotation:314.5,y:21.1},0).wait(1).to({rotation:318.3},0).wait(1).to({rotation:322.1},0).wait(1).to({rotation:325.9},0).wait(1).to({rotation:329.7},0).wait(1).to({rotation:333.5,x:20.9},0).wait(1).to({rotation:337.3,x:21},0).wait(1).to({rotation:341.1,x:20.9},0).wait(1).to({rotation:344.8},0).wait(1).to({rotation:348.6,x:21},0).wait(1).to({rotation:352.4},0).wait(1).to({rotation:356.2},0).wait(1).to({rotation:360,x:20.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.9,42.1);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.weel1();
	this.instance.setTransform(125.8,125.8,1,1,0,0,0,125.8,125.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:2.5},0).wait(1).to({rotation:5},0).wait(1).to({rotation:7.6,y:125.9},0).wait(1).to({rotation:10.1,y:125.8},0).wait(1).to({rotation:12.6},0).wait(1).to({rotation:15.1,y:125.9},0).wait(1).to({rotation:17.6},0).wait(1).to({rotation:20.1,y:125.8},0).wait(1).to({rotation:22.7,y:125.9},0).wait(1).to({rotation:25.2},0).wait(1).to({rotation:27.7},0).wait(1).to({rotation:30.2},0).wait(1).to({rotation:32.7},0).wait(1).to({rotation:35.2},0).wait(1).to({rotation:37.8,x:125.7},0).wait(1).to({rotation:40.3},0).wait(1).to({rotation:42.8,x:125.8,y:125.8},0).wait(1).to({rotation:45.3,x:125.7,y:125.9},0).wait(1).to({rotation:47.8},0).wait(1).to({rotation:50.3,y:125.8},0).wait(1).to({rotation:52.9,y:125.9},0).wait(1).to({rotation:55.4},0).wait(1).to({rotation:57.9,x:125.8},0).wait(1).to({rotation:60.4,x:125.7},0).wait(1).to({rotation:62.9},0).wait(1).to({rotation:65.5},0).wait(1).to({rotation:68,x:125.8},0).wait(1).to({rotation:70.5,x:125.7,y:125.8},0).wait(1).to({rotation:73},0).wait(1).to({rotation:75.5,y:125.9},0).wait(1).to({rotation:78,y:125.8},0).wait(1).to({rotation:80.6,y:125.9},0).wait(1).to({rotation:83.1},0).wait(1).to({rotation:85.6},0).wait(1).to({rotation:88.1},0).wait(1).to({rotation:90.6,y:125.8},0).wait(1).to({rotation:93.1},0).wait(1).to({rotation:95.7},0).wait(1).to({rotation:98.2},0).wait(1).to({rotation:100.7},0).wait(1).to({rotation:103.2},0).wait(1).to({rotation:105.7},0).wait(1).to({rotation:108.3},0).wait(1).to({rotation:110.8},0).wait(1).to({rotation:113.3},0).wait(1).to({rotation:115.8},0).wait(1).to({rotation:118.3},0).wait(1).to({rotation:120.8,y:125.7},0).wait(1).to({rotation:123.4,y:125.8},0).wait(1).to({rotation:125.9},0).wait(1).to({rotation:128.4,y:125.7},0).wait(1).to({rotation:130.9},0).wait(1).to({rotation:133.4},0).wait(1).to({rotation:135.9,y:125.8},0).wait(1).to({rotation:138.5,y:125.7},0).wait(1).to({rotation:141},0).wait(1).to({rotation:143.5,y:125.8},0).wait(1).to({rotation:146,y:125.7},0).wait(1).to({rotation:148.5},0).wait(1).to({rotation:151},0).wait(1).to({rotation:153.6},0).wait(1).to({rotation:156.1},0).wait(1).to({rotation:158.6},0).wait(1).to({rotation:161.1},0).wait(1).to({rotation:163.6},0).wait(1).to({rotation:166.2},0).wait(1).to({rotation:168.7},0).wait(1).to({rotation:171.2},0).wait(1).to({rotation:173.7},0).wait(1).to({rotation:176.2},0).wait(1).to({rotation:178.7},0).wait(1).to({rotation:181.3},0).wait(1).to({rotation:183.8},0).wait(1).to({rotation:186.3},0).wait(1).to({rotation:188.8},0).wait(1).to({rotation:191.3},0).wait(1).to({rotation:193.8},0).wait(1).to({rotation:196.4},0).wait(1).to({rotation:198.9},0).wait(1).to({rotation:201.4},0).wait(1).to({rotation:203.9},0).wait(1).to({rotation:206.4},0).wait(1).to({rotation:209},0).wait(1).to({rotation:211.5},0).wait(1).to({rotation:214},0).wait(1).to({rotation:216.5,x:125.8},0).wait(1).to({rotation:219,x:125.7},0).wait(1).to({rotation:221.5},0).wait(1).to({rotation:224.1,x:125.8},0).wait(1).to({rotation:226.6,x:125.7},0).wait(1).to({rotation:229.1},0).wait(1).to({rotation:231.6},0).wait(1).to({rotation:234.1,x:125.8},0).wait(1).to({rotation:236.6},0).wait(1).to({rotation:239.2,x:125.7},0).wait(1).to({rotation:241.7,x:125.8},0).wait(1).to({rotation:244.2},0).wait(1).to({rotation:246.7},0).wait(1).to({rotation:249.2},0).wait(1).to({rotation:251.7},0).wait(1).to({rotation:254.3},0).wait(1).to({rotation:256.8},0).wait(1).to({rotation:259.3},0).wait(1).to({rotation:261.8},0).wait(1).to({rotation:264.3},0).wait(1).to({rotation:266.9},0).wait(1).to({rotation:269.4},0).wait(1).to({rotation:271.9,x:125.9},0).wait(1).to({rotation:274.4},0).wait(1).to({rotation:276.9},0).wait(1).to({rotation:279.4},0).wait(1).to({rotation:282,x:125.8},0).wait(1).to({rotation:284.5,x:125.9},0).wait(1).to({rotation:287,x:125.8},0).wait(1).to({rotation:289.5},0).wait(1).to({rotation:292,x:125.9,y:125.8},0).wait(1).to({rotation:294.5,y:125.7},0).wait(1).to({rotation:297.1},0).wait(1).to({rotation:299.6},0).wait(1).to({rotation:302.1,y:125.8},0).wait(1).to({rotation:304.6,y:125.7},0).wait(1).to({rotation:307.1},0).wait(1).to({rotation:309.7,x:125.8},0).wait(1).to({rotation:312.2,x:125.9},0).wait(1).to({rotation:314.7},0).wait(1).to({rotation:317.2,x:125.8,y:125.8},0).wait(1).to({rotation:319.7,x:125.9,y:125.7},0).wait(1).to({rotation:322.2},0).wait(1).to({rotation:324.8,y:125.8},0).wait(1).to({rotation:327.3},0).wait(1).to({rotation:329.8},0).wait(1).to({rotation:332.3},0).wait(1).to({rotation:334.8},0).wait(1).to({rotation:337.3},0).wait(1).to({rotation:339.9,x:125.8},0).wait(1).to({rotation:342.4,x:125.9},0).wait(1).to({rotation:344.9},0).wait(1).to({rotation:347.4,x:125.8},0).wait(1).to({rotation:349.9},0).wait(1).to({rotation:352.4,x:125.9},0).wait(1).to({rotation:355,x:125.8},0).wait(1).to({rotation:357.5},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251.5,251.5);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5ZeLQjbgEh3hzQhrhmAEiXQADiUBphuQByh4C2gNQhEjoAPjbQAPjdBiiyQBmi5CzhzQC+h4EFgfQhsjoAUkCQAVkECSjGQCdjVEGhRQEmhbF6BaQAJj/C1iaQCmiMDvgFQDxgEC3CJQDLCZAuEQQAegDBcgYQBegUBAAKQDEAgAXFAQAAACgyBcQg9B7gwCWQicHlAVJgQARHiBNI8QAmEdAjC9g");
	mask.setTransform(206.8,193.1);

	// Layer 3
	this.instance = new lib.Symbol1();
	this.instance.setTransform(375.2,243.1,1,1,0,0,0,125.8,125.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(249.4,117.3,164.2,251.5);


(lib.logomasked960x700ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.heart();
	this.instance.setTransform(562.2,217.5,1,1,0,0,0,170.5,180.1);

	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(217.5,198.6,1,1,0,0,0,210.8,195.2);

	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(46,352.6,1,1,0,0,0,27.1,27.1);

	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(203.2,136.9,1,1,0,0,0,67.2,67.2);

	this.instance_4 = new lib.Symbol6();
	this.instance_4.setTransform(250.2,353.1,1,1,0,0,0,29.2,29.2);

	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(148.5,287.7,1,1,0,0,0,89.4,90);

	this.instance_6 = new lib.Symbol2();
	this.instance_6.setTransform(386.7,89.1,1,1,0,0,0,20.9,21.1);

	this.instance_7 = new lib.Symbol3();
	this.instance_7.setTransform(307,71.9,1,1,0,0,0,52.3,52.5);

	this.instance_8 = new lib.ClipGroup();
	this.instance_8.setTransform(250.5,196.6,1,1,0,0,0,250.5,193.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2001B").s().p("AgxBdQglgHgagOQgbgOgPgSQgOgTAAgVQAAgVAPgTQAOgSAbgOQAcgNAjgIQAmgHAoAAQAuAAAiAHQAjAHAXALIglAUQgPgJgcgHQgbgFgfAAQgeAAgbAGQgZAFgUAMQgTAKgJAOQgKAPAAAOQAAAPAKAOQAKAPASAKQASALAcAGQAaAGAgAAQAXAAAZgDQAbgDAMgEIAAg2IhTAAIAAgVICGAAIAABcQgbAHglAFQgjAFgpAAQgpAAglgIg");
	this.shape.setTransform(710.3,518.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2001B").s().p("ABVBZIi1iQIgBAAIAACQIgxAAIAAixIBAAAICzCNIABAAIAAiNIAxAAIAACxg");
	this.shape_1.setTransform(632.5,519.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2001B").s().p("AgXBZIAAixIAvAAIAACxg");
	this.shape_2.setTransform(567.7,519.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2001B").s().p("ABABZIhWhPIg0AAIAABPIgwAAIAAixIBvAAQAXAAAWADQAWACASAGQARAGAKAJQAKAKAAAOQAAATgYANQgXAJgmAEIBhBSgAhKgJIA4AAQASAAAMgCQAOgCAMgDQAKgDAHgGQAGgFAAgIQAAgIgGgGQgFgFgMgEQgKgDgPgBQgNgCgPAAIg7AAg");
	this.shape_3.setTransform(508.3,519.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2001B").s().p("AhyBZIAAixIDdAAIAAAWIisAAIAAA2ICiAAIAAATIiiAAIAAA8IC0AAIAAAWg");
	this.shape_4.setTransform(438.7,519.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2001B").s().p("AhyBZIAAixIDdAAIAAAWIisAAIAAA2ICiAAIAAATIiiAAIAAA8IC0AAIAAAWg");
	this.shape_5.setTransform(369.9,519.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2001B").s().p("ABVBZIi1iQIgBAAIAACQIgwAAIAAixIA/AAICzCNIABAAIAAiNIAwAAIAACxg");
	this.shape_6.setTransform(296,519.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2001B").s().p("AgXBZIAAixIAvAAIAACxg");
	this.shape_7.setTransform(231.2,519.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2001B").s().p("AguBXQghgHgagNQgXgLgPgSQgNgSAAgUQAAgUANgRQANgQAagOQAagMAhgHQAjgHAkAAQAoAAAiAHQAgAFAXAMIgiASQgSgKgWgEQgZgGgdAAQgcAAgZAGQgYAFgSALQgRAKgJANQgJANAAANQAAAOAJAOQAJAMARAKQATALAXAFQAXAFAfAAQAbAAASgCQAUgCAQgFIAAgxIhMAAIAAgUIB9AAIAABVQgeAIgfAEQgcAEgqAAQgpAAgggHg");
	this.shape_8.setTransform(165.4,519.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2001B").s().p("ABVBZIi1iQIgBAAIAACQIgxAAIAAixIA/AAIC0CNIABAAIAAiNIAwAAIAACxg");
	this.shape_9.setTransform(88.9,519.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2001B").s().p("AhxBZIAAixIDcAAIAAAWIisAAIAAA2ICiAAIAAATIiiAAIAAA8ICzAAIAAAWg");
	this.shape_10.setTransform(17,519.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2001B").s().p("AkOEgIAAo+IERAAIAAGXIEMAAIAACng");
	this.shape_11.setTransform(32.3,458.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2001B").s().p("AixEaQhSgWg8goQg9gpgig5Qgig5AAhDQAAhFAig4QAig3A9gnQA8goBSgVQBSgVBfAAQBfAABSAVQBRAVA+AoQA9AmAiA4QAiA3AABGQAABEgiA4QgiA6g9AoQg+AohRAWQhTAWheAAQheAAhTgWgAg/h0QgdAIgWAQQgVAQgMAXQgMAYAAAbQAAAbAMAXQAMAYAVARQAWARAdAJQAdAKAiAAQAiAAAdgKQAdgJAVgRQAXgRALgYQAMgXAAgbQAAgbgMgYQgLgWgXgRQgWgQgcgIQgegJghAAQghAAgeAJg");
	this.shape_12.setTransform(131.9,458.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2001B").s().p("AiYEgIkfo+IEzAAICEFiIAEAAICAliIE0AAIklI+g");
	this.shape_13.setTransform(245.9,458.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2001B").s().p("AkeEgIAAo+IIqAAIAAChIkqAAIAAAxIEYAAIAACVIkYAAIAAA2IE9AAIAAChg");
	this.shape_14.setTransform(358.7,458.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2001B").s().p("AjkEgIAAo+IBSAAIAAIKIF3AAIAAA0g");
	this.shape_15.setTransform(442.4,458.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2001B").s().p("AEpEgIhaiXImfAAIhYCXIhbAAIFeo+IBNAAIFcI+gAiyBTIFjAAIixkwg");
	this.shape_16.setTransform(525.1,458.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2001B").s().p("AhsEXQhNgWg5gpQg4gogfg3Qggg4AAhBQAAg/Agg5QAgg2A5gpQA5gpBNgWQBMgXBZAAQApAAAuAGQApAHAoAMQAkAMAhARQAfARAUAVIhFAkQgKgNgXgPQgUgNgegMQgcgKgigHQglgGgkAAQhMAAg/AUQg/AVgrAiQgrAigXAuQgXAtAAAxQAAAxAYAuQAXAtArAjQArAiA/AVQA/AUBLAAQBFAABAgUQA+gUArgtIBAAdQgTAVgfAUQgdAUgmAPQgoAPgtAIQguAJg3AAQhaAAhNgXg");
	this.shape_17.setTransform(616.6,458.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2001B").s().p("AkAEgIAAo+IHzAAIAAA0ImhAAIAADFIGGAAIAAAyImGAAIAADfIGvAAIAAA0g");
	this.shape_18.setTransform(701.7,458.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3.4,732.6,525.5);


// stage content:
(lib.logoAnHTML5ComingSoon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*

		responsive scale code as expressed by @davegamez

		*/


		var page_body = document.getElementsByTagName("body")[0];
		page_body.style.backgroundColor = "none";
		page_body.style.overflow = "hidden";
		page_body.style.position = "fixed";

		var page_canvas = document.getElementsByTagName("canvas")[0];
		stageWidth = page_canvas.width;
		stageHeight = page_canvas.height;

		var viewport = document.querySelector('meta[name=viewport]');
		var viewportContent = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0';

		if (viewport === null) {
		 var head = document.getElementsByTagName('head')[0];
		 viewport = document.createElement('meta');
		 viewport.setAttribute('name', 'viewport');
		 head.appendChild(viewport);
		}

		viewport.setAttribute('content', viewportContent);

		function onResize() {
		 var widthToHeight = stageWidth / stageHeight;
		 var newWidth = window.innerWidth;
		 var newHeight = window.innerHeight;
		 var newWidthToHeight = newWidth / newHeight;
		 //
		 if (newWidthToHeight > widthToHeight) {
		 newWidth = newHeight * widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 } else {
		 newHeight = newWidth / widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 }
		 scale = newWidthToHeight / widthToHeight;
		 stage.width = newWidth;
		 stage.height = newHeight;
		 // page_canvas.style.marginTop = ((window.innerHeight - newHeight) / 2) + "px";
		 page_canvas.style.marginLeft = ((window.innerWidth - newWidth) / 2) + "px";
		}

		window.onresize = function () {
		 onResize();
		}

		onResize();

		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.

		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/

		this.email.addEventListener("click", fl_ClickToGoToWebPage_5);

		function fl_ClickToGoToWebPage_5() {
			window.open("mailto:info@lovelace.nl", "_parent");
		}

		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.

		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/

		this.phone.addEventListener("click", fl_ClickToGoToWebPage_6);

		function fl_ClickToGoToWebPage_6() {
			window.open("tel:+31643197789", "_parent");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Contacts
	this.phone = new lib.Phone();
	this.phone.setTransform(595.6,944.5,1,1,0,0,0,89,15.4);
	new cjs.ButtonHelper(this.phone, 0, 1, 1);

	this.email = new lib.email_btn();
	this.email.setTransform(371.6,944.5,1,1,0,0,0,95.2,9.3);
	new cjs.ButtonHelper(this.email, 0, 1, 2, false, new lib.email_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.email},{t:this.phone}]}).wait(1));

	// logoAn
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABIDUIijjLIgDAAIAIDLIi+AAIAAmnIDHAAICpDWIADAAIgIjWIC+AAIAAGng");
	this.shape.setTransform(728.2,775.1,0.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiCDQQg8gQgtgeQgsgdgagrQgZgqAAgxQAAgzAZgpQAZgpAtgdQAtgeA8gOQA9gQBFAAQBFAAA+AQQA7AOAuAeQAuAeAYAoQAZApAAAzQAAAxgZAqQgZAqgtAeQgtAeg8AQQg+AQhFAAQhFAAg9gQgAguhVQgXAGgPAMQgPAMgJARQgJARAAAUQAAATAJARQAIARAQAOQAQANAWAGQAXAHAXAAQAYAAAWgHQAWgGAPgNQAQgMAJgTQAJgRAAgTQAAgUgJgRQgKgSgPgLQgPgMgWgGQgUgHgaAAQgZAAgVAHg");
	this.shape_1.setTransform(667.5,775.1,0.8,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiCDQQg8gQgugeQgrgdgagrQgZgrAAgwQAAgzAZgpQAZgpAsgdQAugeA8gOQA9gQBFAAQBFAAA9AQQA8AOAuAeQAtAeAZAoQAZApAAAzQAAAwgZArQgZAqgtAeQguAeg8AQQg9AQhFAAQhFAAg9gQgAguhVQgXAGgPAMQgOALgKASQgJARAAAUQAAATAJARQAJASAPANQAQANAWAGQAXAHAXAAQAYAAAWgHQAVgGARgNQAPgNAKgSQAIgSAAgSQAAgUgIgRQgKgSgPgLQgQgMgWgGQgVgHgZAAQgZAAgVAHg");
	this.shape_2.setTransform(604.6,775.1,0.8,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhLDcQgigFgigJQgkgJgZgLQgbgLgYgPIB6heQAVAQAjANQAiAMAmAAQAOAAAPgEQAOgFAAgLQAAgFgFgFQgEgEgMgFQgLgEgUgFIg0gOQgagGgggKQgcgLgVgOQgWgNgMgUQgNgTAAgcQAAgoAXgcQAXgcAkgSQAlgSArgHQAvgIAnAAQA7AAA+AQQA7AQAwAfIh9BbQgVgSgcgKQgggJgWAAQgVAAgMAFQgNAEAAALQAAAJAOAFQALAEAgAIIBDAQQAiAKAfAPQAeAPAUAVQATAWAAAhQAAAmgVAdQgWAdgjASQgkAUgrAIQgqAKgtAAQgkAAgjgEg");
	this.shape_3.setTransform(549.4,775.1,0.8,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah2DRQgygNgjgYQgjgYgUghQgTgiAAgpQAAg2AbgvQAcgvAxglQAvgjBDgVQA/gVBJAAQAhAAAfAFQAfAFAaAIQAbAKAUAMQATAMAOAQIg3AaQgGgKgOgLQgPgLgRgHQgSgIgYgFQgXgFgeAAQhAAAg0ATQg2ATgmAfQgnAggUAnQgWAoAAApQAAAfANAbQAOAcAaAUQAaAUAoAMQAmALAyAAQAyAAArgHQAtgJAdgMIAhiDIiNAAIAJgiIDIAAIgwC9Qg5AXg0AJQg5AKg5AAQg8AAgxgOg");
	this.shape_4.setTransform(475.8,775.1,0.8,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABsDUIjzlvIgBAAIhbFvIg8AAIBpmnIBLAAID0FqIABAAIBalqIA8AAIhpGng");
	this.shape_5.setTransform(419.6,775.1,0.8,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhRDUIBnmnIA8AAIhnGng");
	this.shape_6.setTransform(380.3,775.1,0.8,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AC0DUIBbltIgCAAIkwFtIghAAIh8ltIgCAAIhbFtIg7AAIBpmnIBcAAIBwFeIABAAIEfleIBcAAIhpGng");
	this.shape_7.setTransform(336.3,775.1,0.8,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiTDRQgwgMgkgZQgigXgVgiQgTgiAAgpQAAg1AbgwQAbgwAvgkQAtgjBBgVQBAgVBHAAQA8AAAvANQAyANAiAYQAiAXAVAiQATAhAAApQAAA2gaAvQgbAxgtAkQgvAkhAAVQg/AVhKAAQg6AAgxgOgAhLimQgzATgmAfQglAggUAoQgUApAAAoQAAAeANAbQANAbAaAVQAaAUAmAMQAnALAxAAQA9AAAzgSQA0gTAlgfQAkgeAWgqQAUgnAAgqQAAgfgNgbQgOgbgZgUQgagUgmgMQgmgMgyAAQg8AAg1ATg");
	this.shape_8.setTransform(273,775.1,0.8,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah2DRQgxgMgkgZQgjgYgUghQgTghAAgqQAAg2AcgvQAbgvAxglQAugjBDgVQBAgVBJAAQAhAAAfAFQAfAFAaAIQAcAKASAMQAVAMANAQIg3AaQgGgKgOgLQgPgLgQgHQgTgIgYgFQgXgFgfAAQg/AAg0ATQg3AUglAeQgnAggVAnQgVAoAAApQAAAfAOAbQANAcAaAUQAaAUAnAMQAoALAxAAQA0AAAxgPQAxgQAmggIAtAXQgRAPgYAPQgYAOgdAKQghAMgiAFQglAHgmAAQg8AAgxgOg");
	this.shape_9.setTransform(217.7,775.1,0.8,0.8);

	this.instance = new lib.logomasked960x700ai("synched",0);
	this.instance.setTransform(479.4,345.1,1,1,0,0,0,366.2,261.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D42E28").s().p("EhQKAJoIAAzPMCgVAAAIAATPg");
	this.shape_10.setTransform(485.1,777.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(452,603.3,1026.3,868.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
