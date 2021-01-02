# AngularLifeCycle-Hooks---ngOnchange-sharing-Data-between-components
 *****************************Share Data Between Components************************
Data Sharing is an essential concept to understand. There are four different methods for sharing data between angular components
A.	Parent To Child Data sharing using @Input() decorator:- The most common method.
B.	Child To Parent Data sharing using @ ViewChiled() decorator: It allows one component to be injected into another, Giving the parent access to its attributes and functions.
C.	Child To Parent Haring data using @Output() Decorator and EventEmitter():  emit the data from the chiled, which can be listed to by the parent. This approach is dealing with events like click,keypress…. Parent component can subscribe the child event emitter.
D.	Service, Sharing data between Unrelated components by using service. You can use RxJs BehaviourSubject or regular RxJs Subject. This approach allow you to get the same data/value by inject the service in to the component constructor  and subscribe it
 
************Angular Life Cycle Hooks!******************
	Constructor(): Called before anything else , Used to initialize or instantiate an Object.
	ngOnChanges():Called before ngOnInit(), It will call whenever the input value Changes.
	ngOnInit(): It will call when the component get render I to the DOM for the first time.Called after input value changes, Called only Once.
	ngDoCheck():Called whenever there is change or update.
	ngAfterContentInit(): Called Once after the first ngDocheck() Called.
	ngAfterContentChecked(): Called after every ngDoCheck()
	ngAfterViewInit(): called after Angular initialized the component and the child content
	ngAftereViewChecked(): Called after every ngAfterContentChecked()
	ngOnDestroy(): Called 
