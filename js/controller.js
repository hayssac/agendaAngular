		var lista = angular.module("listaTelefonica", ["ngRoute"]);
		lista.controller("listaTelefonicaCtrl", function ($scope) {
			$scope.app = "Lista Telefônica";
			$scope.contatos = [
				{nome: "João", telefone: "97864432"},
				{nome: "Maria", telefone: "9989654"},
				{nome: "Antonio", telefone: "9743213"}
			];
			$scope.operadoras = [
				{nome: "Oi", codigo: 14, categoria: "Celular"},
				{nome: "Vivo", codigo: 15, categoria: "Celular"},
				{nome: "Tim", codigo: 41, categoria: "Celular"},
			];
			$scope.adicionarContato = function (contato) {
				$scope.contatos.push(angular.copy(contato));
				delete $scope.contato;
				$scope.contatosForm.$setPristine();
			};
			$scope.isContatoSelecionado = function (contatos) {
				return contatos.some(function (contato) {
					return contato.selecionado;
				});
			};
			$scope.excluirContato = function(contatos) {
				$scope.contatos = contatos.filter(function(contato){
					if(!contato.selecionado)
						return contato;
				})
			}
		});
		lista.controller("listaHttpCtrl", function($scope, $http) {
			$http.get("./components/exemplo.html")
			.then(function(response) {
				$scope.httpInteracao = response.data;
				$scope.statuscode = response.status;
				$scope.statustext = response.statusText;
			});
		});
		lista.config(function($routeProvider) {
		$routeProvider
			.when("/vermelho", {
					templateUrl : "components/vermelho.html"
			})
		.when("/verde", {
					templateUrl : "components/verde.html"
			})
			.when("/azul", {
					templateUrl : "components/azul.html"
			});
		});