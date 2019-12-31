import { CrudOperationsService } from '../services/crud-operations.service';


export class BaseComponentView {
    // encapsulates all UI logic and data base logic
    // that s tested and working properly;
    constructor(
        private crudService: CrudOperationsService,
        private baseURL: string
    ) { }

    menuText = "View";
    data;
    nextState: boolean;
    previousState: boolean;
    page: number;
    perPage: number;
    numberOfPages: number;
    // pagination ui
    maxHeightCreate: any = 0;
    overFlowView = 'visible';
    maxHeightView: any = '1000px';
    // delete ui
    showSpinner = false;




    getData() {
        this.crudService.getAllPaginated(
            this.baseURL, this.page, this.perPage
        ).subscribe(
            res => {
                const myRes = <any>res;
                console.log(res, myRes.data);
                this.data = myRes.data;
                const pagination = myRes.pagination;

                this.nextState = pagination.nextState;
                this.previousState = pagination.previousState;
                //this.page = pagination.page;

                this.numberOfPages = pagination.numberOfPages;
            },
            err => {
                console.log(err);
            }
        )
    }

    createSubmit(fCreate) {
        console.log(fCreate);
        this.crudService.create(this.baseURL, fCreate.value)
            .subscribe(
                res => {
                    console.log(res);
                }
                , err => {
                    console.log(err);
                });
    }

    deleteRecord(id) {

        this.showSpinner = true;

        this.crudService.delete(this.baseURL, id)
            .subscribe(
                res => {
                    console.log(res);
                    setTimeout(() => {
                        this.page = 1;
                        this.getData();
                        this.showSpinner = false;
                    }, 1000);

                }, err => {
                    console.log(err);
                });
    }

    ngOnInit() {
        this.page = 1;
        this.perPage = 10;
        this.getData();
    }

    onNext() {
        this.page++;
        this.getData();
    }

    onPrevious() {
        if (this.page === 0 || this.page === 1) { }
        else {
            this.page--;
            this.getData();
        }
    }


    log(message) {
        console.log(message);
    }

    toggle(t1, t2) {

        console.dir(t2);
        if (this.maxHeightCreate === 0) {
            this.maxHeightCreate = t1.scrollHeight + 'px';
            this.maxHeightView = 0;
            this.overFlowView = 'hidden';
            this.menuText = "Ceate New";
        } else {

            this.maxHeightCreate = 0;
            this.maxHeightView = t2.scrollHeight + 'px';
            this.menuText = "View";
            this.overFlowView = 'visible';
            this.getData();
        }
    }
}