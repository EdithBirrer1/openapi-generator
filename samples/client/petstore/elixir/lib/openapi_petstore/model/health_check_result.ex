# NOTE: This file is auto generated by OpenAPI Generator 7.0.1-SNAPSHOT (https://openapi-generator.tech).
# Do not edit this file manually.

defmodule OpenapiPetstore.Model.HealthCheckResult do
  @moduledoc """
  Just a string to inform instance is up and running. Make it nullable in hope to get it as pointer in generated model.
  """

  @derive Jason.Encoder
  defstruct [
    :NullableMessage
  ]

  @type t :: %__MODULE__{
    :NullableMessage => String.t | nil
  }

  def decode(value) do
    value
  end
end

